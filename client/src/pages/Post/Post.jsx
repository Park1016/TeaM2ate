import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import classNames from "classnames/bind";

import styles from "./Post.module.scss";

import { httpSelector } from "state/http";
import { userState } from "state/user";
import PostApi from "api/post";
import FramePost from "containers/FramePost/FramePost";
import Comment from "containers/Comment/Comment";
// import useHttp from "hooks/useHttp";

const Post = (props) => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const http = useRecoilValue(httpSelector);
  const user = useRecoilValue(userState);
  // const [makeHttp] = useHttp({ http });
  const { data: post } = useQuery(["post", id], async () => {
    return await new PostApi(http).getPostById(id);
  });

  useEffect(() => {
    if (!post) {
      navigate("/");
    }
  }, [post]);

  // useEffect(() => {
  //   makeHttp();
  // }, [http]);

  return (
    <section className={cx("container")}>
      <div className={cx("content")}>
        {post && (
          <>
            <FramePost
              value={location.state ? location.state : post}
              board={false}
              postId={id}
              http={http}
              user={user}
            />
            <Comment id={id} user={user} />
          </>
        )}
      </div>
    </section>
  );
};

export default Post;
