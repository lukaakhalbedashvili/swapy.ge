import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Input from "../Input";
import { auth } from "@/firebase";

interface FormValues {
  email: string;
  password: string;
  isLogin: boolean;
}

const AuthForm: React.FC = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("არასწორი ელ-ფოსტის ფორმატი")
      .required("სავალდებულოა"),
    password: Yup.string().min(6, "მინიმუმ 6 სიმბოლო").required("სავალდებულოა"),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
      isLogin: true,
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        if (values.isLogin) {
          await signInWithEmailAndPassword(auth, values.email, values.password);
        } else {
          const response = await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );
        }
      } catch (error) {
        formik.setFieldError("password", "პაროლი ან ემაილი არასწორია");
      }
    },
  });

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    errors,
    setFieldValue,
  } = formik;

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-body rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h2 className="text-lg text-white text-center">
          {values.isLogin ? "შესვლა" : "რეგისტრაცია"}
        </h2>

        <Input
          type="email"
          placeholder="ელ-ფოსტა"
          name="email"
          value={values.email}
          onBlurHandler={handleBlur}
          onChange={handleChange}
          errorMessage={touched.email && errors.email}
          wrapperClassName="my-0 mt-7"
          errorMessageClassName="text-sm"
        />

        <Input
          wrapperClassName="mt-4 mb-14"
          type="password"
          placeholder="პაროლი"
          name="password"
          value={values.password}
          onBlurHandler={handleBlur}
          onChange={handleChange}
          errorMessageClassName="text-sm"
          errorMessage={touched.password && errors.password}
        />

        <button
          type="submit"
          className="p-3 bg-main text-white rounded-lg hover:opacity-90 transition text-base"
          onClick={() => setFieldValue("isLogin", values.isLogin)}
        >
          {values.isLogin ? "შესვლა" : "რეგისტრაცია"}
        </button>

        <p
          className="text-center text-white cursor-pointer mt-8"
          onClick={() => setFieldValue("isLogin", !values.isLogin)}
        >
          {values.isLogin ? (
            <>
              არ გაქვთ ანგარიში? <span className="text-main">რეგისტრაცია</span>
            </>
          ) : (
            <>
              უკვე გაქვთ ანგარიში? <span className="text-main">შესვლა</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
