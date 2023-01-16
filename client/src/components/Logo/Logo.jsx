import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Logo.module.scss";
import { GiSteampunkGoggles } from "react-icons/gi";

const Logo = (props) => {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("logo")}>
      <Link to={"/"}>
        {/* <GiSteampunkGoggles /> */}
        <p>
          Tea<span>M2</span>ate
        </p>
      </Link>
    </div>
  );
};

export default Logo;
