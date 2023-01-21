import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import classNames from "classnames/bind";

import styles from "./Comment.module.scss";

import { httpSelector } from "state/http";
import CommentApi from "api/comment";
import CommentWrite from "containers/CommentWrite/CommentWrite";
import CommentContent from "containers/CommentContent/CommentContent";
import useCheckAuth from "hooks/useCheckAuth";
import { authState } from "state/auth";
// import useHttp from "hooks/useHttp";

function Comment(props) {
  const cx = classNames.bind(styles);
  const http = useRecoilValue(httpSelector);
  // const [makeHttp] = useHttp({ http });
  const auth = useRecoilValue(authState);
  const [check, setCheck] = useState(false);
  const [checkAuth] = useCheckAuth({ auth, setCheck, type: "noAlert" });
  const { id } = useParams();
  const [data, setData] = useState();

  const { data: comment } = useQuery(["comment"], async () => {
    return await new CommentApi(http).getCommentByPostId(id);
  });

  useEffect(() => {
    if (comment) {
      setData(comment);
    }
  }, [comment]);

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
        setData={setData}
        value={undefined}
        readOnly={check ? false : true}
      />
      {data && (
        <ul className={cx("content")}>
          {data.map((item, index) => (
            <CommentContent
              key={index}
              http={http}
              postId={id}
              setData={setData}
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
