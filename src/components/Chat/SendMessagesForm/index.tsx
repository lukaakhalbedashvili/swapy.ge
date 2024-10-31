import React, { Dispatch, SetStateAction, useRef, useEffect } from "react";
import useSendMessagesForm from "./useSendMessagesForm";
import Image from "next/image";

interface SendMessagesFormPropsI {
  setIsChatOpen: Dispatch<SetStateAction<boolean>>;
}

const SendMessagesForm = ({ setIsChatOpen }: SendMessagesFormPropsI) => {
  const { data, addMessage } = useSendMessagesForm();

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [data?.$users[0]?.profile[0]?.chats[0]?.messages]);

  return (
    <form
      className="w-[90%] lg:w-96 lg:h-[60vh]  fixed lg:right-10 lg:bottom-36 right-5 bottom-28 flex-col justify-between items-center p-5 rounded-lg bg-white text-black h-[70vh]"
      onSubmit={async (e) => {
        e.preventDefault();
        if (inputRef?.current?.value)
          await addMessage(inputRef?.current?.value);

        if (inputRef.current) {
          inputRef.current.value = "";
        }
      }}
    >
      <div className="flex justify-start items-start relative h-[10%]">
        <Image src="logo-alt.svg" alt="swapy" width={15} height={15} />

        <div className="flex flex-col justify-between items-start ml-8">
          <p className="text-black text-sm">
            გამარჯობა, {data?.$users[0].profile[0]?.name}
          </p>
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

      {!!data?.$users[0]?.profile[0]?.chats?.length && (
        <div className="overflow-scroll flex flex-col h-[75%]">
          {data?.$users[0].profile[0]?.chats[0]?.messages?.map((item) => {
            const AmIAuthor = item.owner === data?.$users[0].profile[0].id;
            return (
              <div
                key={item.id}
                className={`flex flex-row mt-2 mx-2 ${
                  AmIAuthor ? "justify-end" : "justify-start"
                }`}
              >
                <p
                  className={`w-3/5 px-3 py-2 rounded-lg break-words text-xs ${
                    AmIAuthor ? "bg-main" : "bg-gray-200"
                  }`}
                >
                  {item.content}
                </p>
              </div>
            );
          })}

          {/* Dummy div to scroll into view */}
          <div ref={messagesEndRef} />
        </div>
      )}

      <div className="relative h-[15%] pt-5">
        <textarea
          ref={inputRef}
          placeholder="თქვენი შეტყობინება"
          className="bg-transparent outline-0 border-b w-full pl-2 focus:border-main text-black text-sm pr-10 h-full bg-red-400 resize-none pb-2"
        />

        <button
          type="submit"
          className="p-2 bg-main rounded-full absolute right-0 bottom-2 "
        >
          <Image src="send.svg" alt="send" width={15} height={15} />
        </button>
      </div>
    </form>
  );
};

export default SendMessagesForm;
