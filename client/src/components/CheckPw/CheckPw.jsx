import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import classNames from "classnames/bind";

import styles from "./CheckPw.module.scss";

import { httpSelector } from "state/http";
import { userState } from "state/user";
// import useHttp from "hooks/useHttp";
import UserApi from "api/user";
import { makeFormData } from "hooks/makeFormData";
import Input from "components/Input/Input";
import CommonBtn from "components/CommonBtn/CommonBtn";

const CheckPw = ({ setShow }) => {
  const cx = classNames.bind(styles);
  const user = useRecoilValue(userState);
  const http = useRecoilValue(httpSelector);
  // const [makeHttp] = useHttp({ http });
  const [form, setForm] = useState({ password: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.password.length === 0) {
      alert("비밀번호를 입력해주세요");
      return;
    }

    const id = user.id;
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

  // useEffect(() => {
  //   makeHttp();
  // }, [http]);

  return (
    <form className={cx("container")} onSubmit={(e) => onSubmit(e)}>
      <Input
        placeholder={"비밀번호를 입력하세요"}
        type={"password"}
        name={"password"}
        id={"password"}
        value={form.password}
        form={form}
        setForm={setForm}
      />
      <CommonBtn type={"submit"} color={"blue"} text={"확인"} />
    </form>
  );
};

export default CheckPw;
