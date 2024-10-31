import { getCurrentTimeInReadableFormat } from "@/utils/getCurrentTimeInReadableFormat";
import { db } from "@/utils/instantdb";
import { tx, id } from "@instantdb/react";

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
        tx.messages[id()]
          .update({
            content: text,
            owner: ownerId,
            created: getCurrentTimeInReadableFormat(),
          })
          .link({
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
      tx.chats[id()]
        .update({
          label: user?.email,
          created: getCurrentTimeInReadableFormat(),
        })
        .link({
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
