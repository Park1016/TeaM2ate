import { useRecoilValue, useSetRecoilState } from "recoil";

import UserApi from "api/user";
import { httpSelector } from "state/http";
import { modalState } from "state/modal";
import { userState } from "state/user";
import { authState } from "state/auth";

const useCheckAuth = ({ auth, type }) => {
  const http = useRecoilValue(httpSelector);
  const setModal = useSetRecoilState(modalState);
  const setAuth = useSetRecoilState(authState);
  const setUser = useSetRecoilState(userState);

  const onAlert = () => {
    if (type === "alert") {
      alert("로그인 후 접근 가능한 페이지입니다");
      setModal({ login: true, signup: false, find: false });
    }
    setAuth(false);
    setUser(false);
  };

  const checkAuth = async () => {
    if (auth) {
      const user = await new UserApi(http).me();
      if (!user) {
        onAlert();
      } else {
        setUser(user);
      }
    } else {
      onAlert();
    }
  };

  return [checkAuth];
};

export default useCheckAuth;
