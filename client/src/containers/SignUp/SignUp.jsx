import React from "react";
import { useSetRecoilState } from "recoil";

import { modalState } from "state/modal";
import SignUpForm from "containers/SignUpForm/SignUpForm";

function SignUp(props) {
  const setModal = useSetRecoilState(modalState);
  return (
    <section>
      <SignUpForm />
      <p
        onClick={() =>
          setModal({
            login: true,
            signup: false,
            find: false,
          })
        }
      >
        로그인
      </p>
    </section>
  );
}

export default SignUp;
