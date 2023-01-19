import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import CsrfApi from "api/csrf";

const { persistAtom } = recoilPersist();

export const csrfState = atom({
  key: "csrfState",
  default: null,
  effects_UNSTABLE: [persistAtom],
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
