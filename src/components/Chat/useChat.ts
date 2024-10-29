import { init, tx, id, User, lookup, i } from "@instantdb/react";

const APP_ID = "4dcd7bfc-7eb7-41e6-9641-d66c66132fc2";

type Schema = {
  user: User;
};

interface SignInResponseI {
  app_id: string;
  created_at: string;
  email: string;
  id: string;
  refresh_token: string;
}

const db = init<Schema>({ appId: APP_ID });

const useChat = () => {
  const { isLoading, error, data } = db.useQuery({ $users: {} });

  const { user } = db.useAuth();

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

  const createChat = async (userId: string) => {
    const Id = id();

    const response = await db.transact([
      tx.chats[Id].update({ createdAt: new Date(), userId: userId }).link({
        profile: "e0975f59-3c77-46b3-b0a9-d9482e697170",
      }),
    ]);

    console.log(response, "response");
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
  console.log(data);

  return {
    user,
    sendMagicCode,
    signInWithMagicCode,
    createProfile,
    createChat,
  };
};

export default useChat;
