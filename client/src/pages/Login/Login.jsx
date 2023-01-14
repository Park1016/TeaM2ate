import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginForm from "containers/LoginForm/LoginForm";
import classNames from "classnames/bind";

import styles from "./Login.module.scss";
import { GrClose } from "react-icons/gr";

import Logo from "components/Logo/Logo";

const Login = (props) => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section className={cx("container")}>
      <div className={cx("content")}>
        <Logo />
        <GrClose onClick={() => navigate(-1)} />
        <LoginForm location={location} />
        <div className={cx("line")}></div>
        <article className={cx("bottom")}>
          <Link to={"/signUp"}>회원가입</Link>
          <Link to={"/find"}>계정찾기</Link>
        </article>
      </div>
    </section>
  );
};

export default Login;
