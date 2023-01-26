import React from "react";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Logo.module.scss";

import { useCheckPageOut } from "hooks/useCheckPageOut";
import { modalState } from "state/modal";

const Logo = (props) => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  const setModal = useSetRecoilState(modalState);
  const [onCheckPageOut] = useCheckPageOut();

  const onClick = () => {
    if (onCheckPageOut()) {
      navigate("/");
      setModal({ login: false, signup: false, find: false });
    }
  };

  return (
    <button className={cx("logo")} type="button" onClick={onClick}>
      <span>Tea</span>
      <span>
        <span>M</span>
        <span>2</span>
      </span>
      <span>ate</span>
    </button>
  );
};

export default Logo;
