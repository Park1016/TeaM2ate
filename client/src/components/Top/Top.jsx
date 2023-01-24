import React, { useState, useEffect } from "react";
import { throttle } from "lodash";
import classNames from "classnames/bind";

import styles from "./Top.module.scss";
import { IoArrowUpCircle } from "react-icons/io5";

const Top = (props) => {
  const cx = classNames.bind(styles);

  const [toggleBtn, setToggleBtn] = useState(false);

  const handleScroll = () => {
    const { scrollY } = window;

    scrollY > 200 ? setToggleBtn(true) : setToggleBtn(false);
  };

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", throttle(handleScroll, 500));

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      {toggleBtn && <IoArrowUpCircle className={cx("top")} onClick={onClick} />}
    </>
  );
};

export default Top;
