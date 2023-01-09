import React, { useState } from "react";
import { Link } from "react-router-dom";

import FindPw from "containers/FindPw/FindPw";
import CertEmail from "components/CertEmail/CertEmail";

function FindAuth(props) {
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
      <Link to={"/login"}>취소</Link>
    </section>
  );
}

export default FindAuth;
