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

const useCreateChatForm = () => {
  const { user } = db.useAuth();

  const { data } = db.useQuery({
    $users: {
      profile: { $: { where: { userId: user?.id } }, chats: { messages: {} } },
    },
  });

  console.log(data, "?.profiles");

  const sendMagicCode = async (email: string): Promise<{ sent: boolean }> => {
    const response: { sent: boolean } = await db.auth
      .sendMagicCode({ email })
      .catch((err) => {
        console.log("Uh oh :" + err.body?.message);
      });

    return response;
  };

  const signInWithMagicCode = async ({
    sentEmail,
    code,
  }: {
    sentEmail: string;
    code: string;
  }): Promise<SignInResponseI> => {
    const response = await db.auth
      .signInWithMagicCode({ email: sentEmail, code })
      .catch((err) => {
        console.log("Uh oh :" + err.body?.message);
      });

    return response.user;
  };

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
  };

  const createProfile = async ({
    userId,
    email,
    name,
  }: {
    userId: string;
    email: string;
    name: string;
  }) => {
    const profileId = lookup("email", email);

    console.log(profileId, "profileId");

    const response = await db.transact([
      tx.profiles[profileId]
        .update({ userId: userId, name })
        .link({ user: userId }),
    ]);

    console.log(response, "response");
  };

  return {
    user,
    sendMagicCode,
    signInWithMagicCode,
    createProfile,
    addMessage,
    createChat,
    data,
  };
};

export default useCreateChatForm;
