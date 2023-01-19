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
import useHttp from "hooks/useHttp";

const Post = (props) => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  const { id } = useParams();
  const http = useRecoilValue(httpSelector);
  const [makeHttp] = useHttp({ http });
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

  useEffect(() => {
    makeHttp();
  }, [http]);

  return (
    <section className={cx("container")}>
      <div className={cx("content")}>
        {post && (
          <>
            <FramePost
              value={post}
              board={false}
              auth={auth}
              postId={id}
              http={http}
              user={user}
            />
            <Comment id={id} />
          </>
        )}
      </div>
    </section>
  );
};

export default Post;
