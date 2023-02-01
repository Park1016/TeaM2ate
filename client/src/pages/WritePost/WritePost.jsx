import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useQuery } from "@tanstack/react-query";
import classNames from "classnames/bind";

import styles from "./WritePost.module.scss";

import { userState } from "state/user";
import { httpSelector } from "state/http";
import WritesampleApi from "api/writesample";
import FrameWrite from "containers/FrameWrite/FrameWrite";
import Alert from "components/Alert/Alert";

const WritePost = (props) => {
  const cx = classNames.bind(styles);
  const http = useRecoilValue(httpSelector);
  const user = useRecoilValue(userState);
  const { data: sample } = useQuery(["writesample"], async () => {
    return await new WritesampleApi(http).getSample();
  });

  const [form, setForm] = useState({
    title: "",
    text: "",
    tag: [],
    type: [],
    progress: "ing",
  });

  const preventClose = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  useEffect(() => {
    if (sample) {
      setForm({ ...form, text: sample[0].content });
    }
  }, [sample]);

  useEffect(() => {
    if (user) {
      window.addEventListener("beforeunload", preventClose);
    }
    return () => {
      if (user) {
        window.removeEventListener("beforeunload", preventClose);
      }
    };
  }, []);

  return (
    <>
      {user && form.text.length !== 0 ? (
        <FrameWrite form={form} setForm={setForm} />
      ) : (
        <Alert />
      )}
    </>
  );
};

export default WritePost;
