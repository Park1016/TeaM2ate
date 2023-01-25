import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import classNames from "classnames/bind";

import styles from "./SignUpForm.module.scss";

import { httpSelector } from "state/http";
import { modalState } from "state/modal";
import UserApi from "api/user";
import { makeFormData } from "hooks/makeFormData";
import Input from "components/Input/Input";
import CertEmail from "components/CertEmail/CertEmail";
import CommonBtn from "components/CommonBtn/CommonBtn";
import { isNull } from "hooks/formatChecker";
// import useHttp from "hooks/useHttp";

const SignUpForm = (props) => {
  const cx = classNames.bind(styles);
  const setModal = useSetRecoilState(modalState);
  const [checkEmail, setCheckEmail] = useState(false);
  const [nameText, setNameText] = useState(false);
  const [idText, setIdText] = useState(false);
  const [pwText, setPwText] = useState(false);

  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    authNum: "",
    url: "",
  });

  const http = useRecoilValue(httpSelector);
  // const [makeHttp] = useHttp({ http });

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

  const nullCheck = () => {
    if (nameText || idText || pwText) {
      return false;
    } else if (isNull(form.name)) {
      alert("이름을 입력해주세요");
      return false;
    } else if (isNull(form.username)) {
      alert("아이디를 입력해주세요");
      return false;
    } else if (isNull(form.password)) {
      alert("비밀번호를 입력해주세요");
      return false;
    } else if (!checkEmail) {
      alert("이메일 인증을 완료해주세요.");
      return false;
    } else {
      return true;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!nullCheck()) {
      return;
    }

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
      const res = await new UserApi(http).signup(formData);
      if (res) {
        alert("회원가입이 완료되었습니다");
        setForm({ name: "", username: "", password: "", email: "", url: "" });
        setModal({
          login: true,
          signup: false,
          find: false,
        });
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // useEffect(() => {
  //   makeHttp();
  // }, [http]);

  return (
    <form
      className={cx("container")}
      onSubmit={(e) => onSubmit(e)}
      encType="multipart/form-data"
      method="post"
    >
      <article className={cx("inputBox")}>
        <label htmlFor="name">이름</label>
        <Input
          placeholder={"이름을 입력하세요"}
          type={"text"}
          name={"name"}
          id={"name"}
          value={form.name}
          form={form}
          setForm={setForm}
          setText={setNameText}
        />
        {nameText && <p className={cx("text")}>{nameText}</p>}
      </article>
      <article className={cx("inputBox", { margin: idText })}>
        <label htmlFor="username">아이디</label>
        <Input
          placeholder={"아이디를 입력하세요"}
          type={"text"}
          name={"username"}
          id={"username"}
          value={form.username}
          form={form}
          setForm={setForm}
          setText={setIdText}
        />
        {idText && <p className={cx("text")}>{idText}</p>}
      </article>
      <article className={cx("inputBox", { margin: pwText })}>
        <label htmlFor="password">비밀번호</label>
        <Input
          placeholder={"비밀번호를 입력하세요"}
          type={"password"}
          name={"password"}
          id={"password"}
          value={form.password}
          form={form}
          setForm={setForm}
          setText={setPwText}
        />
        {pwText && <p className={cx("text")}>{pwText}</p>}
      </article>
      <CertEmail
        form={form}
        setForm={setForm}
        checkEmail={checkEmail}
        setCheckEmail={setCheckEmail}
        checkDup={true}
      />
      {/* <label htmlFor="url">프로필 사진</label>
      <input
        type="file"
        name="url"
        id="url"
        accept="imgae/*"
        onChange={(e) => onPhoto(e)}
      /> */}
      <CommonBtn
        type={"submit"}
        color={"blue"}
        text={"회원가입"}
        notAllow={nameText || idText || pwText ? true : false}
      />
    </form>
  );
};

export default SignUpForm;
