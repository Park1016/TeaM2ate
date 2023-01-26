import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import PostApi from "api/post";

import { httpSelector } from "state/http";
import { userState } from "state/user";
import FrameWrite from "containers/FrameWrite/FrameWrite";
// import useHttp from "hooks/useHttp";

const UpdatePost = (props) => {
  const { id } = useParams();
  const http = useRecoilValue(httpSelector);
  // const [makeHttp] = useHttp({ http });
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  const { data } = useQuery(["post", id], async () => {
    return await new PostApi(http).getPostById(id);
  });

  const [form, setForm] = useState();

  useEffect(() => {
    if (data) {
      if (!user) {
        alert("글 수정,삭제는 작성자 본인만 할 수 있습니다");
        navigate("/");
      }
      setForm({
        title: data.title,
        text: data.text,
        tag: data.tag,
        type: data.type,
        progress: data.progress,
      });
    }
  }, [data]);

  // useEffect(() => {
  //   makeHttp();
  // }, [http]);

  return (
    <>{form && <FrameWrite form={form} setForm={setForm} editId={id} />}</>
  );
};

export default UpdatePost;
