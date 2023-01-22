import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import classNames from "classnames/bind";

import styles from "./Comment.module.scss";

import { httpSelector } from "state/http";
import CommentApi from "api/comment";
import ReplycommApi from "api/replycomm";
import CommentWrite from "containers/CommentWrite/CommentWrite";
import CommentContent from "containers/CommentContent/CommentContent";
import useCheckAuth from "hooks/useCheckAuth";
import { authState } from "state/auth";
import { commentState, replyState } from "state/comment";
// import useHttp from "hooks/useHttp";

function Comment(props) {
  const cx = classNames.bind(styles);
  const http = useRecoilValue(httpSelector);
  // const [makeHttp] = useHttp({ http });
  const auth = useRecoilValue(authState);
  const comment = useRecoilValue(commentState);
  const setComment = useSetRecoilState(commentState);
  const setReply = useSetRecoilState(replyState);
  const [check, setCheck] = useState(false);
  const [checkAuth] = useCheckAuth({ auth, setCheck, type: "noAlert" });
  const { id } = useParams();

  const { data } = useQuery(["comment"], async () => {
    return await new CommentApi(http).getCommentByPostId(id);
  });
  const { data: reply } = useQuery(["reply"], async () => {
    return await new ReplycommApi(http).getReplyCommByPostId(id);
  });

  useEffect(() => {
    if (data) {
      setComment(data);
    }
  }, [data]);

  useEffect(() => {
    if (reply) {
      setReply(reply);
    }
  }, [reply]);

  // useEffect(() => {
  //   makeHttp();
  // }, [http]);

  useEffect(() => {
    checkAuth();
  }, [auth]);

  return (
    <article className={cx("container")}>
      <CommentWrite
        http={http}
        id={id}
        value={undefined}
        readOnly={check ? false : true}
      />
      {comment && (
        <ul className={cx("content")}>
          {comment.map((item, index) => (
            <CommentContent
              key={index}
              http={http}
              postId={id}
              item={item}
              commentId={item.id}
            />
          ))}
        </ul>
      )}
    </article>
  );
}

export default Comment;
