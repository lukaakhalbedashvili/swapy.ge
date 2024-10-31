import { db } from "@/utils/instantdb";
import { tx, id, lookup } from "@instantdb/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { SignInResponseI } from "@/app.interface";
import { useState } from "react";

const useCreateChatForm = () => {
  const [isCodeSent, setIsCodeSent] = useState(false);

  const { user } = db.useAuth();

  const { data } = db.useQuery({
    $users: {
      profile: { $: { where: { userId: user?.id } }, chats: { messages: {} } },
    },
  });

  const sendMagicCode = async (email: string): Promise<{ sent: boolean }> => {
    const response: { sent: boolean } = await db.auth
      .sendMagicCode({ email })
      .catch((err) => {
        console.log("Uh oh :" + err.body?.message);
      });

    return response;
  };

  const signInWithMagicCode = async ({
    sentEmail,
    code,
  }: {
    sentEmail: string;
    code: string;
  }): Promise<SignInResponseI> => {
    const response = await db.auth
      .signInWithMagicCode({ email: sentEmail, code })
      .catch((err) => {
        console.log("Uh oh :" + err.body?.message);
      });

    return response.user;
  };

  const createProfile = async ({
    userId,
    email,
    name,
  }: {
    userId: string;
    email: string;
    name: string;
  }) => {
    const profileId = lookup("email", email);

    console.log(profileId, "profileId");

    const response = await db.transact([
      tx.profiles[profileId]
        .update({ userId: userId, name })
        .link({ user: userId }),
    ]);

    console.log(response, "response");
  };

  const createChat = async () => {
    const profileId = data?.$users[0].profile[0].id!;

    const response = await db.transact([
      tx.chats[id()].update({ label: user?.email }).link({
        profiles: [profileId, "9cd14f8d-fada-409f-b6b1-1867ceef135d"],
      }),
    ]);

    console.log(response, "response");
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string(),
    name: Yup.string().required("სავალდებულოა"),
    magicCode: Yup.string().required("სავალდებულოა"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      magicCode: "",
    },
    validationSchema,
    onSubmit: async () => {
      console.log(values);

      const { email, id } = await signInWithMagicCode({
        code: values.magicCode,
        sentEmail: values.email,
      });

      createProfile({ email, name: values.name, userId: id });

      if (user && !data?.$users[0]?.profile[0]?.chats?.length) {
        createChat();
      }
    },
  });

  const { values, handleBlur, handleChange, touched, errors } = formik;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  return {
    sendMagicCode,
    handleSubmit,
    values,
    handleBlur,
    touched,
    handleChange,
    errors,
    isCodeSent,
    setIsCodeSent,
  };
};

export default useCreateChatForm;
