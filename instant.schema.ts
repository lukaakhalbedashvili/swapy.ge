// my-app
// https://instantdb.com/dash?s=main&t=home&app=4dcd7bfc-7eb7-41e6-9641-d66c66132fc2

import { i } from "@instantdb/react";

const graph = i.graph(
  {
    $users: i.entity({
      email: i.any().unique().indexed(),
    }),
    chats: i.entity({
      created: i.any(),
      label: i.any(),
    }),
    messages: i.entity({
      content: i.any(),
      created: i.any(),
      owner: i.any(),
    }),
    profiles: i.entity({
      email: i.any().unique().indexed(),
      name: i.any(),
      nickname: i.any(),
      userId: i.any().unique(),
    }),
  },
  {
    chatsProfiles: {
      forward: {
        on: "chats",
        has: "many",
        label: "profiles",
      },
      reverse: {
        on: "profiles",
        has: "many",
        label: "chats",
      },
    },
    messagesChat: {
      forward: {
        on: "messages",
        has: "one",
        label: "chat",
      },
      reverse: {
        on: "chats",
        has: "many",
        label: "messages",
      },
    },
    profilesUser: {
      forward: {
        on: "profiles",
        has: "one",
        label: "user",
      },
      reverse: {
        on: "$users",
        has: "one",
        label: "profile",
      },
    },
  }
);

export default graph;
