import { useRecoilValue, useSetRecoilState } from "recoil";

import UserApi from "api/user";
import { httpSelector } from "state/http";
import { modalState } from "state/modal";

const useCheckAuth = ({ auth, setCheck, type }) => {
  const http = useRecoilValue(httpSelector);
  const setModal = useSetRecoilState(modalState);

  const onAlert = () => {
    if (type === "alert") {
      alert("로그인 후 접근 가능한 페이지입니다");
      setModal({ login: true, signup: false, find: false });
    }
    setCheck(false);
  };

  const checkAuth = async () => {
    if (auth) {
      const user = await new UserApi(http).me();
      if (!user) {
        onAlert();
      } else {
        setCheck(true);
      }
    } else {
      onAlert();
    }
  };

  return [checkAuth];
};

export default useCheckAuth;
