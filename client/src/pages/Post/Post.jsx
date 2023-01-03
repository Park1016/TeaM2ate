import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import classNames from "classnames/bind";

import styles from "./Post.module.scss";

import { authState } from "state/auth";
import { httpSelector } from "state/http";
import PostApi from "api/post";
import FramePost from "containers/FramePost/FramePost";
import Comment from "containers/Comment/Comment";
import UpdateDelBtn from "components/UpdateDelBtn/UpdateDelBtn";

const Post = (props) => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  const { id } = useParams();
  const http = useRecoilValue(httpSelector);
  const auth = useRecoilValue(authState);
  const { isLoading, error, data } = useQuery(["post", id], async () => {
    return await new PostApi(http).getPostById(id);
  });

  useEffect(() => {
    if (!data) {
      navigate("/");
    }
  }, [data]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>error!</p>}
      {data && (
        <>
          {data.userId === auth && <UpdateDelBtn type={"post"} id={id} />}
          <FramePost value={data} />
          <Comment id={id} />
        </>
      )}
    </>
  );
};

export default Post;
