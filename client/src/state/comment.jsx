import { atom } from "recoil";

export const commentState = atom({
  key: "commentState",
  default: false,
});

export const replyState = atom({
  key: "replyState",
  default: false,
});
