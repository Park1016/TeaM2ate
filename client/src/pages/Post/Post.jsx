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
import Bookmark from "components/Bookmark/Bookmark";
import UserApi from "api/user";

const Post = (props) => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  const { id } = useParams();
  const http = useRecoilValue(httpSelector);
  const auth = useRecoilValue(authState);
  const { data: post } = useQuery(["post", id], async () => {
    return await new PostApi(http).getPostById(id);
  });
  const { data: user } = useQuery(["postUser", id], async () => {
    return await new UserApi(http).me();
  });

  useEffect(() => {
    if (!post) {
      navigate("/");
    }
  }, [post]);

  return (
    <>
      {post && (
        <>
          {post.userId === auth && <UpdateDelBtn type={"post"} id={id} />}
          <Bookmark id={id} http={http} user={user} />
          <FramePost value={post} />
          <Comment id={id} />
        </>
      )}
    </>
  );
};

export default Post;
