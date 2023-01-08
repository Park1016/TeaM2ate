import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";

import { httpSelector } from "state/http";
import { authState } from "state/auth";
import UserApi from "api/user";
import HeaderSearch from "components/HeaderSearch/HeaderSearch";

const Header = () => {
  const cx = classNames.bind(styles);

  const http = useRecoilValue(httpSelector);
  const auth = useRecoilValue(authState);
  const setAuth = useSetRecoilState(authState);

  const onLogout = async () => {
    const logout = await new UserApi(http).logout();
    if (logout) {
      setAuth(false);
      alert(logout);
    }
  };

  return (
    <header className={cx("container")}>
      <Link to={"/"}>로고</Link>
      <HeaderSearch />
      <Link to={"post/write"}>글쓰기</Link>
      {auth ? (
        <>
          <Link to={"mypage"}>마이페이지</Link>
          <p onClick={onLogout}>로그아웃</p>
        </>
      ) : (
        <Link to={"login"}>로그인</Link>
      )}
    </header>
  );
};

export default React.memo(Header);
