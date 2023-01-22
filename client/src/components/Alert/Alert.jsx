import React from "react";
import classNames from "classnames/bind";

import styles from "./Alert.module.scss";
import { RiAlertFill } from "react-icons/ri";
import { IoAlertCircleOutline } from "react-icons/io5";

const Alert = (props) => {
  const cx = classNames.bind(styles);
  return (
    <section className={cx("container")}>
      <RiAlertFill />
      {/* <IoAlertCircleOutline /> */}
      <p>로그인 후 이용 가능합니다</p>
    </section>
  );
};

export default Alert;
