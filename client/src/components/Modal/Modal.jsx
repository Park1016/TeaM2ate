import React from "react";
import { useSetRecoilState } from "recoil";
import classNames from "classnames/bind";

import styles from "./Modal.module.scss";
import { GrClose } from "react-icons/gr";

import Logo from "components/Logo/Logo";
import { modalState } from "state/modal";
import Login from "containers/Login/Login";
import SignUp from "containers/SignUp/SignUp";
import FindAuth from "containers/FindAuth/FindAuth";

const Modal = ({ type }) => {
  const cx = classNames.bind(styles);
  const setModal = useSetRecoilState(modalState);

  const onClose = () => {
    setModal({
      login: false,
      signup: false,
      find: false,
    });
  };

  const onCloseCheck = () => {
    if (type !== "login") {
      if (!window.confirm("진행상황이 초기화됩니다. 화면을 나가시겠습니까?")) {
        return;
      }
      onClose();
    } else {
      onClose();
    }
  };

  return (
    <section className={cx("container")}>
      <div className={cx("content")}>
        <Logo />
        <GrClose onClick={onCloseCheck} />
        {type === "login" && <Login />}
        {type === "signup" && <SignUp />}
        {type === "find" && <FindAuth />}
      </div>
    </section>
  );
};

export default Modal;
