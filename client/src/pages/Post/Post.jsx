import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import classNames from "classnames/bind";

import styles from "./Post.module.scss";

import { authState } from "state/auth";
import { httpSelector } from "state/http";
import PostApi from "api/post";
import UserApi from "api/user";
import FramePost from "containers/FramePost/FramePost";
import Comment from "containers/Comment/Comment";
import UpdateDelBtn from "components/UpdateDelBtn/UpdateDelBtn";
import Bookmark from "components/Bookmark/Bookmark";

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
    if (auth) {
      return await new UserApi(http).me();
    } else {
      return false;
    }
  });

  useEffect(() => {
    if (!post) {
      navigate("/");
    }
  }, [post]);

  return (
    <section className={cx("container")}>
      <div className={cx("content")}>
        {user && <Bookmark id={id} http={http} user={user} />}
        {post && (
          <>
            {post.userId === auth && <UpdateDelBtn type={"post"} id={id} />}
            <FramePost value={post} board={false} />
            <Comment id={id} />
          </>
        )}
      </div>
    </section>
  );
};

export default Post;
