import React, { useState } from "react";
import { Link } from "react-router-dom";

import FindPw from "containers/FindPw/FindPw";
import CertEmail from "components/CertEmail/CertEmail";
import { modalState } from "state/modal";
import { useSetRecoilState } from "recoil";

function FindAuth(props) {
  const setModal = useSetRecoilState(modalState);
  const [form, setForm] = useState({ email: "", username: "" });
  const [checkEmail, setCheckEmail] = useState(false);

  return (
    <section>
      {!checkEmail && (
        <CertEmail
          form={form}
          setForm={setForm}
          setCheckEmail={setCheckEmail}
          checkDup={false}
        />
      )}
      {checkEmail && <FindPw user={form} />}
      <p
        onClick={() =>
          setModal({
            login: true,
            signup: false,
            find: false,
          })
        }
      >
        취소
      </p>
    </section>
  );
}

export default FindAuth;
