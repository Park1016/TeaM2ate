import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import classNames from "classnames/bind";

import styles from "./CertEmail.module.scss";

import { checkAuth, sendEmail } from "hooks/certEmail";
import { makeFormData } from "hooks/makeFormData";
import { httpSelector } from "state/http";
import Input from "components/Input/Input";

const CertEmail = ({ form, setForm, checkEmail, setCheckEmail, checkDup }) => {
  const cx = classNames.bind(styles);
  const http = useRecoilValue(httpSelector);
  const [checkAuthNum, setCheckAuthNum] = useState(false);

  const onSendEmail = async () => {
    const email = form.email;
    const formData = makeFormData({ email, checkDup });
    const user = await sendEmail(http, formData);
    if (user.status === 200 || user.data) {
      if (!checkDup) {
        setForm({ ...form, username: user.data.username });
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
      <article className={cx("inputBox")}>
        <label htmlFor="email">이메일</label>
        <Input
          placeholder={"이메일을 입력하세요"}
          type={"email"}
          name={"email"}
          id={"email"}
          value={form.email}
          form={form}
          setForm={setForm}
          readOnly={checkAuthNum && true}
        />
      </article>
      {!checkEmail && (
        <button type="button" onClick={onSendEmail}>
          인증하기
        </button>
      )}
      {checkAuthNum && (
        <>
          <article className={cx("inputBox")}>
            <label htmlFor="authNum">인증번호</label>
            <Input
              placeholder={"인증번호를 입력하세요"}
              type={"text"}
              name={"authNum"}
              id={"authNum"}
              value={form.authNum}
              form={form}
              setForm={setForm}
            />
          </article>
          {!checkEmail && (
            <button type="button" onClick={onAuthNum}>
              인증확인
            </button>
          )}
        </>
      )}
    </>
  );
};

export default CertEmail;
