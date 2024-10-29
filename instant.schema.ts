// my-app
// https://instantdb.com/dash?s=main&t=home&app=4dcd7bfc-7eb7-41e6-9641-d66c66132fc2

import { i } from "@instantdb/react";

const graph = i.graph(
  {
    $users: i.entity({
      email: i.any().unique().indexed(),
      // email: i.string().unique(),
    }),
    profiles: i.entity({
      nickname: i.string(),
      userId: i.string().unique(),
    }),
    roles: i.entity({
      type: i.string().unique(),
    }),
    todos: i.entity({
      text: i.string(),
      userId: i.string(),
      completed: i.boolean(),
    }),
  },
  {
    // `$users` is in the reverse direction for all these links!
    todoOwner: {
      reverse: {
        on: "$users",
        has: "many",
        label: "todos",
      },
      forward: {
        on: "todos",
        has: "one",
        label: "owner",
      },
    },
    userRoles: {
      reverse: {
        on: "$users",
        has: "one",
        label: "role",
      },
      forward: {
        on: "roles",
        has: "many",
        label: "users",
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
