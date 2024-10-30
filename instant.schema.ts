// my-app
// https://instantdb.com/dash?s=main&t=home&app=4dcd7bfc-7eb7-41e6-9641-d66c66132fc2

import { i } from "@instantdb/react";

const graph = i.graph(
  {
    $users: i.entity({
      email: i.any().unique().indexed(),
    }),
    profiles: i.entity({
      name: i.string(),
      userId: i.string().unique(),
    }),
    messages: i.entity({
      content: i.string(),
      owner: i.string(),
    }),
    chats: i.entity({ label: i.string() }),
  },
  {
    chat: {
      reverse: {
        on: "chats",
        has: "many",
        label: "messages",
      },
      forward: {
        on: "messages",
        has: "one",
        label: "chat",
      },
    },
    chatOwners: {
      reverse: {
        on: "profiles",
        has: "many",
        label: "chats",
      },
      forward: {
        on: "chats",
        has: "many",
        label: "profiles",
      },
    },
    userProfiles: {
      reverse: {
        on: "$users",
        has: "one",
        label: "profile",
      },
      forward: {
        on: "profiles",
        has: "one",
        label: "user",
      },
    },
  }
);

export default graph;
