import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";

import { BsPencilSquare } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

import { httpSelector } from "state/http";
import { authState } from "state/auth";
import { modalState } from "state/modal";
import { userState } from "state/user";
import useCheckAuth from "hooks/useCheckAuth";
import HeaderSearch from "components/HeaderSearch/HeaderSearch";
import CommonBtn from "components/CommonBtn/CommonBtn";
import Logo from "components/Logo/Logo";
import ProfileToggle from "components/ProfileToggle/ProfileToggle";
import Modal from "components/Modal/Modal";
// import useHttp from "hooks/useHttp";

const Header = () => {
  const cx = classNames.bind(styles);
  const location = useLocation();
  const auth = useRecoilValue(authState);
  const user = useRecoilValue(userState);
  const http = useRecoilValue(httpSelector);
  // const [makeHttp] = useHttp({ http });
  const modal = useRecoilValue(modalState);
  const setModal = useSetRecoilState(modalState);
  const [checkAuth] = useCheckAuth({ auth, type: "noAlert" });
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, [auth, location]);

  // useEffect(() => {
  //   makeHttp();
  // }, [http]);

  return (
    <>
      <header className={cx("container")}>
        <article className={cx("content")}>
          <nav className={cx("logo")}>
            <Logo />
          </nav>
          <HeaderSearch auth={user} />
          <ul className={cx("rightBtns", { check: user })}>
            <li>
              {user ? (
                <button type="button" className={cx("iconBox")}>
                  <BsPencilSquare
                    className={cx("icon", { profile: false })}
                    onClick={() => navigate("/post/write")}
                  />
                </button>
              ) : (
                <CommonBtn
                  type={"button"}
                  color={"blue"}
                  text={"글쓰기"}
                  path={"post/write"}
                />
              )}
            </li>
            <li>
              {user ? (
                <button
                  type="button"
                  className={cx("iconBox")}
                  onMouseDown={() => setShow(!show)}
                  onBlur={() => setShow(false)}
                >
                  <FaUserCircle className={cx("icon", { profile: true })} />
                </button>
              ) : (
                <div
                  onClick={() =>
                    setModal({
                      login: true,
                      signup: false,
                      find: false,
                    })
                  }
                >
                  <CommonBtn type={"button"} color={"white"} text={"로그인"} />
                </div>
              )}
              {show && <ProfileToggle http={http} setShow={setShow} />}
            </li>
          </ul>
        </article>
      </header>
      {modal.login && <Modal type={"login"} />}
      {modal.signup && <Modal type={"signup"} />}
      {modal.find && <Modal type={"find"} />}
    </>
  );
};

export default React.memo(Header);
