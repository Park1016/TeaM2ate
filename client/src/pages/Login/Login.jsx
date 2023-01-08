import React from "react";
import { Link, useLocation } from "react-router-dom";
import LoginForm from "containers/LoginForm/LoginForm";

const Login = (props) => {
  const location = useLocation();

  return (
    <section>
      <LoginForm location={location} />
      <Link to={"/signUp"}>회원가입</Link>
      <Link to={"/find"}>계정찾기</Link>
    </section>
  );
};

export default Login;
