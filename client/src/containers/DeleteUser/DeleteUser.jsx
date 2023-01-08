import UserApi from "api/user";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authState } from "state/auth";
import { httpSelector } from "state/http";

const DeleteUser = (props) => {
  const auth = useRecoilValue(authState);
  const setAuth = useSetRecoilState(authState);
  const http = useRecoilValue(httpSelector);
  const navigate = useNavigate();
  const onClick = async () => {
    const check = window.confirm("회원을 탈퇴하시겠습니까?");
    if (!check) {
      return;
    }
    const res = await new UserApi(http).delete(auth);
    if (res) {
      const logout = await new UserApi(http).logout();
      if (logout) {
        setAuth(false);
        alert("회원탈퇴가 완료되었습니다");
        navigate("/");
      }
    }
  };
  return (
    <button type="button" onClick={onClick}>
      회원탈퇴
    </button>
  );
};

export default DeleteUser;
