"use client";
import Image from "next/image";
import React, { useState } from "react";
import Input from "../Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendEmailToMe } from "@/server-actions";

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    phone: Yup.string().length(9, "მიუთითეთ ვალიდური ნომერი"),
    name: Yup.string().required("სავალდებულოა"),
  });

  const formik = useFormik({
    initialValues: {
      phone: "",
      name: "",
    },
    validationSchema,
    onSubmit: () => {
      console.log("nicI");
      sendEmailToMe("testi");
    },
  });

  const { values, handleBlur, handleChange, touched, errors } = formik;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  return (
    <>
      {isChatOpen && (
        <form
          className="fixed lg:right-10 lg:bottom-36 w-fit right-5 bottom-28 flex-col justify-center items-center p-10 rounded-lg bg-white"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center items-center relative">
            <Image src={"logo-alt.svg"} alt="swapy" width={15} height={15} />

            <div className="flex flex-col justify-between items-start ml-8">
              <p className="text-black">გამარჯობა</p>
              <p className="text-gray-500 text-xs">
                ჩვენ 24/7-ზე ხელმისაწვდომი ვართ
              </p>
            </div>

            <Image
              src="cross.svg"
              alt="close"
              width={9}
              height={9}
              className="absolute right-0 top-0 cursor-pointer"
              onClick={() => setIsChatOpen(false)}
            />
          </div>

          <Input
            className="bg-transparent h-12 outline-0 border-b w-full pl-2 focus:border-main pr-6 text-black text-sm"
            placeholder="ტელეფონი"
            type="number"
            value={values.phone}
            name="phone"
            onBlurHandler={handleBlur}
            onChange={handleChange}
            errorMessage={touched.phone && errors.phone}
            errorMessageClassName="text-error mt-1 absolute text-sm"
          />

          <Input
            className="bg-transparent h-12 outline-0 border-b w-full pl-2 focus:border-main pr-6 text-black text-sm"
            placeholder="სახელი"
            type="text"
            value={values.name}
            name="name"
            onBlurHandler={handleBlur}
            onChange={handleChange}
            errorMessage={touched.name && errors.name}
            errorMessageClassName="text-error mt-1 absolute text-sm"
          />

          <button
            className="bg-main w-full px-5 py-3 rounded-md mt-5"
            type="submit"
          >
            დაწყება
          </button>

          <div className="text-black flex items-center justify-start mt-5">
            <div className="p-4 bg-[#f4f4f4] rounded-full h-full">
              <Image
                src="telephone.svg"
                alt="ტელეფონი"
                width={15}
                height={15}
              />
            </div>

            <div className="flex flex-col justify-between items-start h-full ml-5">
              <p className="text-xs">დაგვირეკეთ</p>
              <p className="text-sm">598 58 70 01</p>
            </div>
          </div>
        </form>
      )}

      <div
        className="fixed lg:right-10 lg:bottom-10  w-fit right-5 bottom-7 flex justify-center items-center p-5 rounded-full cursor-pointer bg-main"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <Image src={"messenger.svg"} alt="chat" width={20} height={20} />
      </div>
    </>
  );
};

export default Chat;
