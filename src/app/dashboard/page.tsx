"use client";
import { id, init, tx } from "@instantdb/react";
import React, { useRef, useState } from "react";

const APP_ID = "4dcd7bfc-7eb7-41e6-9641-d66c66132fc2";

interface SignInResponseI {
  app_id: string;
  created_at: string;
  email: string;
  id: string;
  refresh_token: string;
}

const db = init({ appId: APP_ID });

const Dashboard = () => {
  const [selectedChatId, setSelectedChatId] = useState<string>();

  const { user } = db.useAuth();

  const { data } = db.useQuery({
    $users: {
      profile: { $: { where: { userId: user?.id } }, chats: { messages: {} } },
    },
    chats: { $: { where: { id: selectedChatId } }, messages: {} },
  });

  const addMessage = async (text: string) => {
    const ownerId = data?.$users[0].profile[0].id;

    try {
      await db.transact([
        tx.messages[id()].update({ content: text, owner: ownerId }).link({
          chat: selectedChatId,
        }),
      ]);
    } catch (err) {
      console.log(err, "error");
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);
  console.log(data?.chats[0].messages);

  return (
    <div className="flex flex-col text-black">
      {data?.$users[0]?.profile[0]?.chats?.map((item) => {
        return (
          <button onClick={() => setSelectedChatId(item.id)} key={item.id}>
            {item.label}
          </button>
        );
      })}

      {!!data?.chats[0] && (
        <>
          <div className="overflow-scroll flex flex-col h-[75%]">
            {data?.chats[0]?.messages?.map((item) => {
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
          </div>

          <input
            ref={inputRef}
            className="bg-transparent h-12 outline-0 border-b w-full pl-2 focus:border-main pr-6 text-black text-sm"
          />

          <button
            type="button"
            onClick={async () => {
              if (inputRef?.current?.value)
                await addMessage(inputRef?.current?.value);
            }}
          >
            გაგზავნა
          </button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
