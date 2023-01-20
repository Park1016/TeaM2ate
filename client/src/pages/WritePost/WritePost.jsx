import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import classNames from "classnames/bind";

import styles from "./WritePost.module.scss";

import { authState } from "state/auth";
import useCheckAuth from "hooks/useCheckAuth";
import FrameWrite from "containers/FrameWrite/FrameWrite";
import Alert from "components/Alert/Alert";

const WritePost = (props) => {
  const cx = classNames.bind(styles);
  const auth = useRecoilValue(authState);
  const [check, setCheck] = useState(false);
  const [checkAuth] = useCheckAuth({ auth, setCheck, type: "alert" });
  const [form, setForm] = useState({
    title: "",
    text: "",
    tag: [],
    type: [],
    progress: "ing",
  });

  useEffect(() => {
    checkAuth();
  }, [auth]);

  return (
    <>{check ? <FrameWrite form={form} setForm={setForm} /> : <Alert />}</>
  );
};

export default WritePost;
