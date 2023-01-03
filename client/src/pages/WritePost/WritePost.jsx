import React, { useState } from "react";
import FrameWrite from "containers/FrameWrite/FrameWrite";

const WritePost = (props) => {
  const [form, setForm] = useState({
    title: "",
    text: "",
    tag: [],
    type: [],
    progress: "ing",
  });

  return <FrameWrite form={form} setForm={setForm} />;
};

export default WritePost;
