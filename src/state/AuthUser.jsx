import { atom } from "recoil";

export const AuthUser = atom({
  key: "AuthUser",
  default: {
    user: null,
    loading: true,
  },
});
