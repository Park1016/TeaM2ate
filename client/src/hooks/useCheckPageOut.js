import { useRecoilValue } from "recoil";
import { useLocation } from "react-router-dom";

import { modalState } from "state/modal";
import { userState } from "state/user";

export const useCheckPageOut = () => {
  const location = useLocation();
  const modal = useRecoilValue(modalState);
  const user = useRecoilValue(userState);

  const onCheckPageOut = () => {
    if (
      modal.signup ||
      (!modal.login &&
        !modal.find &&
        user &&
        (location.pathname === "/post/write" ||
          location.pathname === "/settings" ||
          location.pathname.includes("/post/update")))
    ) {
      if (
        !window.confirm(
          "변경사항이 초기화됩니다. 정말 페이지를 나가시겠습니까?"
        )
      ) {
        return false;
      }
      return true;
    } else {
      return true;
    }
  };

  return [onCheckPageOut];
};
