import { init, tx, id, lookup, i } from "@instantdb/react";

const APP_ID = "4dcd7bfc-7eb7-41e6-9641-d66c66132fc2";

interface SignInResponseI {
  app_id: string;
  created_at: string;
  email: string;
  id: string;
  refresh_token: string;
}

const db = init({ appId: APP_ID });

const useChat = () => {
  const { user } = db.useAuth();

  const { data } = db.useQuery({
    $users: {
      profile: { $: { where: { userId: user?.id } }, chats: { messages: {} } },
    },
  });

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
    createChat,
    data,
  };
};

export default useChat;
