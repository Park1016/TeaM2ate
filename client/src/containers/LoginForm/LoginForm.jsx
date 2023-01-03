import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

import { httpSelector } from "state/http";
import { authState } from "state/auth";
import UserApi from "api/user";
import { makeFormData } from "hooks/makeFormData";
import Input from "components/Input/Input";

const LoginForm = (props) => {
  const navigate = useNavigate();
  const http = useRecoilValue(httpSelector);
  const setAuth = useSetRecoilState(authState);
  const [form, setForm] = useState({ id: "", pw: "" });

  const onSubmit = async (e) => {
    e.preventDefault();

    const username = form.id;
    const password = form.pw;

    const formData = makeFormData({ username, password });

    try {
      const res = await new UserApi(http).login(formData);
      setAuth(res.id);
      setForm({ id: "", pw: "" });
      navigate("/");
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <label htmlFor="id">Id</label>
      <Input
        type={"text"}
        name={"id"}
        id={"id"}
        value={form.id}
        form={form}
        setForm={setForm}
      />
      <label htmlFor="pw">Password</label>
      <Input
        type={"password"}
        name={"pw"}
        id={"pw"}
        value={form.pw}
        form={form}
        setForm={setForm}
      />
      <button type="submit">로그인</button>
    </form>
  );
};

export default LoginForm;
