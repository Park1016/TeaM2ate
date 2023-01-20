import React from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Username.module.scss";

const Username = ({ username, id }) => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  return (
    <p className={cx("name")} onClick={() => navigate(`/user/${id}`)}>
      {username}
    </p>
  );
};

export default Username;
