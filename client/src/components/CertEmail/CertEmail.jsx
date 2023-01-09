import React, { useState } from "react";
import { useRecoilValue } from "recoil";

import { checkAuth, sendEmail } from "hooks/certEmail";
import { makeFormData } from "hooks/makeFormData";
import { httpSelector } from "state/http";
import Input from "components/Input/Input";

const CertEmail = ({ form, setForm, setCheckEmail, checkDup }) => {
  const http = useRecoilValue(httpSelector);
  const [checkAuthNum, setCheckAuthNum] = useState(false);

  const onSendEmail = async () => {
    const email = form.email;
    const formData = makeFormData({ email, checkDup });
    const user = await sendEmail(http, formData);
    if (user) {
      if (!checkDup) {
        setForm({ ...form, username: user.username });
      }
      setCheckAuthNum(true);
    }
  };

  const onAuthNum = async () => {
    const email = form.email;
    const authNum = form.authNum;
    const formData = makeFormData({ email, authNum });
    const res = await checkAuth(http, formData);

    if (res === 200) {
      alert("인증이 완료되었습니다");
      setCheckEmail(true);
    } else {
      if (res === 408) {
        setCheckAuthNum(false);
        return;
      }
      setForm({ ...form, authNum: "" });
    }
  };

  return (
    <>
      <label htmlFor="email">이메일</label>
      <Input
        type={"email"}
        name={"email"}
        id={"email"}
        value={form.email}
        form={form}
        setForm={setForm}
        readOnly={checkAuthNum && true}
      />
      <button type="button" onClick={onSendEmail}>
        인증하기
      </button>
      {checkAuthNum && (
        <>
          <label htmlFor="authNum">인증번호</label>
          <Input
            type={"text"}
            name={"authNum"}
            id={"authNum"}
            value={form.authNum}
            form={form}
            setForm={setForm}
          />
          <button type="button" onClick={onAuthNum}>
            인증확인
          </button>
        </>
      )}
    </>
  );
};

export default CertEmail;
