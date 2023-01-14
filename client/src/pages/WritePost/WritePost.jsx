import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { authState } from "state/auth";
import useCheckAuth from "hooks/useCheckAuth";
import FrameWrite from "containers/FrameWrite/FrameWrite";

const WritePost = (props) => {
  const auth = useRecoilValue(authState);
  const [checkAuth] = useCheckAuth({ auth });
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

  return <>{auth && <FrameWrite form={form} setForm={setForm} />}</>;
};

export default WritePost;
