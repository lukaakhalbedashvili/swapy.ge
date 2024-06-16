import React, {
  ChangeEvent,
  HTMLInputTypeAttribute,
  useEffect,
  useState,
} from "react";

interface InputI {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string | undefined | false;
  name: string;
  onBlurHandler?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  permanentText?: string;
}

const Input = ({
  placeholder,
  type,
  name,
  errorMessage,
  onBlurHandler,
  onChange,
  onFocus,
  value,
  permanentText,
}: InputI) => {
  return (
    <div className="relative my-8">
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onBlur={onBlurHandler}
        name={name}
        onChange={onChange}
        onFocus={onFocus}
        className="bg-transparent h-12 outline-0 border-b w-full pl-2 focus:border-main pr-6"
      />
      <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
        {permanentText}
      </span>

      {errorMessage && <p className="text-error mt-1">{errorMessage}</p>}
    </div>
  );
};

export default Input;
