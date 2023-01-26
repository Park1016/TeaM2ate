import React from "react";
import { useSetRecoilState } from "recoil";
import classNames from "classnames/bind";

import styles from "./Alert.module.scss";
import { RiAlertFill } from "react-icons/ri";

import { modalState } from "state/modal";

const Alert = (props) => {
  const cx = classNames.bind(styles);
  const setModal = useSetRecoilState(modalState);
  return (
    <section className={cx("container")}>
      <article className={cx("content")}>
        <RiAlertFill />
        <p>
          <span
            className={cx("login")}
            onClick={() =>
              setModal({ login: true, signup: false, find: false })
            }
          >
            로그인
          </span>{" "}
          후 이용 가능합니다
        </p>
      </article>
    </section>
  );
};

export default Alert;
