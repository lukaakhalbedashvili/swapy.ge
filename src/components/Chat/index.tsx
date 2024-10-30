"use client";
import Image from "next/image";
import React, { useState } from "react";

import useChat from "./useChat";
import CreateChatForm from "./CreateChatForm";
import SendMessagesForm from "./SendMessagesForm";

const Chat = () => {
  const { user, createChat, data } = useChat();

  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  return (
    <>
      {isChatOpen && user && <SendMessagesForm setIsChatOpen={setIsChatOpen} />}

      {isChatOpen && !user && <CreateChatForm setIsChatOpen={setIsChatOpen} />}

      <div
        className="fixed lg:right-10 lg:bottom-10  w-fit right-5 bottom-7 flex justify-center items-center p-5 rounded-full cursor-pointer bg-main"
        onClick={() => {
          if (user && !data?.$users[0]?.profile[0]?.chats?.length) {
            createChat();
          }
          setIsChatOpen(!isChatOpen);
        }}
      >
        <Image src={"messenger.svg"} alt="chat" width={20} height={20} />
      </div>
    </>
  );
};

export default Chat;
