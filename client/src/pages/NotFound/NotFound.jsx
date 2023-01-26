import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./NotFound.module.scss";
import { TbMoodSad } from "react-icons/tb";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const NotFound = (props) => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();

  useEffect(() => {
    alert("페이지를 찾을 수 없습니다");
    navigate("/");
  }, []);
  return (
    <section className={cx("container")}>
      {/* <TbMoodSad /> */}
      <AiOutlineExclamationCircle />
      <p>Not Found</p>
    </section>
  );
};

export default NotFound;
