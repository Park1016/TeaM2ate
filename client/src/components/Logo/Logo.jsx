import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Logo.module.scss";

const Logo = (props) => {
  const cx = classNames.bind(styles);

  return <Link to={"/"}>로고</Link>;
};

export default Logo;
