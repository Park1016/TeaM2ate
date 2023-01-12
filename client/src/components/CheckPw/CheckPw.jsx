import React, { useState } from "react";
import { useRecoilValue } from "recoil";

import { authState } from "state/auth";
import { httpSelector } from "state/http";
import UserApi from "api/user";
import { makeFormData } from "hooks/makeFormData";
import Input from "components/Input/Input";

const CheckPw = ({ setShow }) => {
  const auth = useRecoilValue(authState);
  const http = useRecoilValue(httpSelector);
  const [form, setForm] = useState({ password: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.password.length === 0) {
      alert("비밀번호를 입력해주세요");
      return;
    }

    const id = auth;
    const pw = form.password;
    const formData = makeFormData({ id, pw });
    const res = await new UserApi(http).checkPw(formData);

    if (!res) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    } else {
      setShow(true);
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Input
        placeholder={"비밀번호를 입력하세요"}
        type={"password"}
        name={"password"}
        id={"password"}
        value={form.password}
        form={form}
        setForm={setForm}
      />
      <button type="submit">확인</button>
    </form>
  );
};

export default CheckPw;
