import React, { Dispatch, SetStateAction } from "react";
import useCreateChatForm from "./useCreateChatForm";
import Image from "next/image";
import Input from "@/components/Input";

interface CreateChatFormPropsI {
  setIsChatOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateChatForm = ({ setIsChatOpen }: CreateChatFormPropsI) => {
  const {
    sendMagicCode,
    handleSubmit,
    values,
    handleBlur,
    touched,
    handleChange,
    errors,
    isCodeSent,
    setIsCodeSent,
  } = useCreateChatForm();

  return (
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

      <div className="relative">
        <Input
          className="bg-transparent h-12 outline-0 border-b w-full pl-2 focus:border-main pr-6 text-black text-sm"
          placeholder="ემაილი"
          type="email"
          value={values.email}
          name="email"
          onBlurHandler={handleBlur}
          onChange={handleChange}
          errorMessage={touched.email && errors.email}
          errorMessageClassName="text-error mt-1 absolute text-sm"
        />

        <button
          type="button"
          onClick={async () => {
            if (!values.email) return;

            const { sent } = await sendMagicCode(values.email);

            setIsCodeSent(sent);
          }}
          className="absolute right-0 -bottom-10 bg-secondary rounded-lg p-2 text-xs"
          disabled={isCodeSent}
        >
          {!isCodeSent ? "კოდის მიღება" : "გაგზავნილია"}
        </button>
      </div>

      <Input
        className="bg-transparent h-12 outline-0 border-b w-full pl-2 focus:border-main pr-6 text-black text-sm"
        placeholder="კოდი"
        type="text"
        value={values.magicCode}
        name="magicCode"
        onBlurHandler={handleBlur}
        onChange={handleChange}
        errorMessage={touched.magicCode && errors.magicCode}
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
          <Image src="telephone.svg" alt="ტელეფონი" width={15} height={15} />
        </div>

        <div className="flex flex-col justify-between items-start h-full ml-5">
          <p className="text-xs">დაგვირეკეთ</p>

          <a className="text-sm" href="tel:598 58 70 01">
            598 58 70 01
          </a>
        </div>
      </div>
    </form>
  );
};

export default CreateChatForm;
