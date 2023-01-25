import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import classNames from "classnames/bind";

import styles from "./WritePost.module.scss";

import { userState } from "state/user";
import FrameWrite from "containers/FrameWrite/FrameWrite";
import Alert from "components/Alert/Alert";

const WritePost = (props) => {
  const cx = classNames.bind(styles);
  const user = useRecoilValue(userState);
  const [form, setForm] = useState({
    title: "",
    text: "",
    tag: [],
    type: [],
    progress: "ing",
  });

  return <>{user ? <FrameWrite form={form} setForm={setForm} /> : <Alert />}</>;
};

export default WritePost;
