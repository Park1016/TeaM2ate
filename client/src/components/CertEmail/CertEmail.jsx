import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import classNames from "classnames/bind";

import styles from "./CertEmail.module.scss";

import { checkAuth, sendEmail } from "hooks/certEmail";
import { makeFormData } from "hooks/makeFormData";
import { httpSelector } from "state/http";
import Input from "components/Input/Input";
import Timer from "components/Timer/Timer";
import useHttp from "hooks/useHttp";
import UserApi from "api/user";

const CertEmail = ({ form, setForm, checkEmail, setCheckEmail, checkDup }) => {
  const cx = classNames.bind(styles);
  const http = useRecoilValue(httpSelector);
  const [makeHttp] = useHttp({ http });
  const [reStart, setReStart] = useState(false);
  const [checkAuthNum, setCheckAuthNum] = useState(false);

  const onSendEmail = async () => {
    if (checkEmail) {
      return;
    }
    const email = form.email;
    const formData = makeFormData({ email, checkDup });
    if (!checkDup) {
      const res = await new UserApi(http).checkExist(formData);
      if (!res) {
        alert("회원가입이 되어있지 않은 이메일입니다");
        return;
      }
    }
    const user = await sendEmail(http, formData);
    if (user.status === 200 || user.data) {
      if (!checkDup) {
        setForm({ ...form, username: user.data.username });
      }
      if (checkAuthNum) {
        setReStart(!reStart);
      } else {
        setCheckAuthNum(true);
      }
      // alert("이메일로 인증번호가 발송되었습니다");
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

  useEffect(() => {
    makeHttp();
  }, [http]);

  return (
    <>
      <article className={cx("content")}>
        <label htmlFor="email">이메일</label>
        <div className={cx("inputBox")}>
          <Input
            placeholder={"이메일을 입력하세요"}
            type={"email"}
            name={"email"}
            id={"email"}
            value={form.email}
            form={form}
            setForm={setForm}
            readOnly={checkAuthNum || checkEmail}
          />
          {checkAuthNum ? (
            <button
              className={cx("button", { checkEmail })}
              type="button"
              onClick={() => setCheckAuthNum(false)}
            >
              {checkEmail ? "인증완료" : "재인증하기"}
            </button>
          ) : (
            <button
              className={cx("button", { checkEmail })}
              type="button"
              onClick={onSendEmail}
            >
              {checkEmail ? "인증완료" : "인증하기"}
            </button>
          )}
        </div>
      </article>

      {checkAuthNum && !checkEmail && (
        <>
          <article className={cx("content", { authNum: true })}>
            <label htmlFor="authNum">인증번호</label>
            {!checkEmail && (
              <div className={cx("inputBox")}>
                <Input
                  placeholder={"인증번호를 입력하세요"}
                  type={"text"}
                  name={"authNum"}
                  id={"authNum"}
                  value={form.authNum}
                  form={form}
                  setForm={setForm}
                />
                <button
                  className={cx("button")}
                  type="button"
                  onClick={onAuthNum}
                >
                  인증확인
                </button>
              </div>
            )}
            <div className={cx("timer")}>
              <Timer setCheckAuthNum={setCheckAuthNum} start={reStart} />
            </div>
          </article>
        </>
      )}
    </>
  );
};

export default CertEmail;
