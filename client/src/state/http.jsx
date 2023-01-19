import CsrfApi from "api/csrf";
import { createContext } from "react";
import { atom, selector, useSetRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

export const csrfState = atom({
  key: "csrfState",
  default: null,
});

export const httpSelector = selector({
  key: "httpSelector",
  get: async ({ get }) => {
    const csrf = get(csrfState);
    try {
      let data;
      if (csrf) {
        data = await new CsrfApi().csrfToken();
      } else {
        data = csrf;
      }
      const http = {
        credentials: "include",
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          "_csrf-token": data,
        },
      };
      return http;
    } catch (err) {
      throw err;
    }
  },
});
