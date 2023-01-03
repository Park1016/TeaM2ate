import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "containers/SignUpForm/SignUpForm";

function SignUp(props) {
  return (
    <section>
      <SignUpForm />
      <Link to={"/login"}>로그인</Link>
    </section>
  );
}

export default SignUp;
