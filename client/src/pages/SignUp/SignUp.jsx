import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { Link, useNavigate } from "react-router-dom";

import { httpSelector } from "state/http";
import UserApi from "api/user";
import { makeFormData } from "hooks/makeFormData";
import Input from "components/Input/Input";

function SignUp(props) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    url: "",
  });

  const http = useRecoilValue(httpSelector);

  const onPhoto = (e) => {
    const image = e.target.files[0];
    setForm({ ...form, [e.target.name]: image });
  };

  const onSubmitPhoto = async () => {
    const formData = new FormData();
    formData.append("url", form.url);
    const res = await new UserApi(http).photo(formData);
    console.log(res);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (form.url) {
      await onSubmitPhoto();
    }

    const name = form.name;
    const username = form.username;
    const password = form.password;
    const email = form.email;
    const url = form.url;

    const formData = makeFormData({ name, username, password, email, url });

    try {
      await new UserApi(http).signup(formData);
      setForm({ name: "", username: "", password: "", email: "", url: "" });
      navigate("/login");
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <section>
      <form
        onSubmit={(e) => onSubmit(e)}
        encType="multipart/form-data"
        method="post"
      >
        <label htmlFor="name">이름</label>
        <Input
          type={"text"}
          name={"name"}
          id={"name"}
          value={form.name}
          form={form}
          setForm={setForm}
        />
        <label htmlFor="username">아이디</label>
        <Input
          type={"text"}
          name={"username"}
          id={"username"}
          value={form.username}
          form={form}
          setForm={setForm}
        />
        <label htmlFor="password">비밀번호</label>
        <Input
          type={"password"}
          name={"password"}
          id={"password"}
          value={form.password}
          form={form}
          setForm={setForm}
        />
        <label htmlFor="email">이메일</label>
        <Input
          type={"text"}
          name={"email"}
          id={"email"}
          value={form.email}
          form={form}
          setForm={setForm}
        />
        <label htmlFor="url">프로필 사진</label>
        <input
          type="file"
          name="url"
          id="url"
          accept="imgae/*"
          onChange={(e) => onPhoto(e)}
        />
        <button type="submit">회원가입</button>
      </form>
      <Link to={"/login"}>로그인</Link>
    </section>
  );
}

export default SignUp;
