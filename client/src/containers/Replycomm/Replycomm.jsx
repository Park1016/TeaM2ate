import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import classNames from "classnames/bind";

import styles from "./Replycomm.module.scss";

import ReplycommApi from "api/replycomm";
import { replyState } from "state/reply";
import { httpSelector } from "state/http";
import CommentContent from "containers/CommentContent/CommentContent";

function Replycomm({ postId, commentId, item }) {
  const cx = classNames.bind(styles);
  const http = useRecoilValue(httpSelector);
  const reply = useRecoilValue(replyState);

  const [data, setData] = useState();

  const onGetData = async () => {
    const res = await new ReplycommApi(http).getReplyCommByCommentId(commentId);
    setData(res);
  };

  useEffect(() => {
    if (item) {
      onGetData();
    }
  }, []);

  useEffect(() => {
    if (reply && reply[0].commentId === data[0].commentId) {
      setData(reply);
    }
  }, [reply]);

  return (
    <>
      {data && data.length !== 0 && (
        <article className={cx("container")}>
          <ul className={cx("content")}>
            {data.map((item, index) => (
              <>
                <CommentContent
                  key={index}
                  http={http}
                  postId={postId}
                  setData={setData}
                  item={item}
                  replycomm={true}
                  commentId={commentId}
                />
              </>
            ))}
          </ul>
        </article>
      )}
    </>
  );
}

export default Replycomm;
