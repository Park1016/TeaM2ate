import React from "react";
import classNames from "classnames/bind";

import styles from "./Loading.module.scss";
import { FiLoader } from "react-icons/fi";

const Loading = (props) => {
  const cx = classNames.bind(styles);

  return (
    <section className={cx("container")}>
      <FiLoader />
      <p>페이지를 불러오는 중입니다</p>
    </section>
  );
};

export default Loading;
