import { init, tx, id } from "@instantdb/react";

const APP_ID = "4dcd7bfc-7eb7-41e6-9641-d66c66132fc2";

const db = init({ appId: APP_ID });

const useSendMessagesForm = () => {
  const { user } = db.useAuth();

  const { data } = db.useQuery({
    $users: {
      profile: { $: { where: { userId: user?.id } }, chats: { messages: {} } },
    },
  });

  const addMessage = async (text: string) => {
    const chatId = data?.$users[0].profile[0].chats[0].id;
    const ownerId = data?.$users[0].profile[0].id;

    try {
      await db.transact([
        tx.messages[id()].update({ content: text, owner: ownerId }).link({
          chat: chatId,
        }),
      ]);
    } catch (err) {
      console.log(err, "err");
    }
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

  return {
    user,
    addMessage,
    createChat,
    data,
  };
};

export default useSendMessagesForm;
