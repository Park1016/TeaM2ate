import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./CommonBtn.module.scss";

const CommonBtn = ({ color, path, text }) => {
  const cx = classNames.bind(styles);

  return (
    <button
      className={cx("container", { color: color === "blue" ? true : false })}
    >
      <Link to={path}>{text}</Link>
    </button>
  );
};

export default CommonBtn;
