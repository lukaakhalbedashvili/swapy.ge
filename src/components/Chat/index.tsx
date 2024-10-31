"use client";
import Image from "next/image";
import React, { useState } from "react";
import CreateChatForm from "./CreateChatForm";
import SendMessagesForm from "./SendMessagesForm";
import { db } from "@/utils/instantdb";

const Chat = () => {
  const { user } = db.useAuth();

  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  return (
    <>
      {isChatOpen && user && <SendMessagesForm setIsChatOpen={setIsChatOpen} />}

      {isChatOpen && !user && <CreateChatForm setIsChatOpen={setIsChatOpen} />}

      <div
        className="fixed lg:right-10 lg:bottom-10  w-fit right-5 bottom-7 flex justify-center items-center p-5 rounded-full cursor-pointer bg-main"
        onClick={() => {
          setIsChatOpen(!isChatOpen);
        }}
      >
        <Image src={"messenger.svg"} alt="chat" width={20} height={20} />
      </div>
    </>
  );
};

export default Chat;
