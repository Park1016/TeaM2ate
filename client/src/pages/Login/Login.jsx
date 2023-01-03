import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "containers/LoginForm/LoginForm";

const Login = (props) => {
  return (
    <section>
      <LoginForm />
      <Link to={"/signUp"}>회원가입</Link>
      <Link to={"/find"}>계정찾기</Link>
    </section>
  );
};

export default Login;
