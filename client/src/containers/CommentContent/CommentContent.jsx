import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import classNames from "classnames/bind";

import styles from "./CommentContent.module.scss";

import { authState } from "state/auth";
import UpdateDelBtn from "components/UpdateDelBtn/UpdateDelBtn";
import CommentWrite from "containers/CommentWrite/CommentWrite";
import ProfilePhoto from "components/ProfilePhoto/ProfilePhoto";
import Time from "components/Time/Time";
import Textarea from "components/Textarea/Textarea";
import Username from "components/Username/Username";
import Replycomm from "containers/Replycomm/Replycomm";
import ReplycommWrite from "containers/ReplycommWrite/ReplycommWrite";

function CommentContent({ http, postId, setData, item, replycomm, commentId }) {
  const cx = classNames.bind(styles);
  const auth = useRecoilValue(authState);
  const [edit, setEdit] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [showReplyWrite, setShowReplyWrite] = useState(false);

  return (
    <li className={cx("list")}>
      <div className={cx("icon")}>
        {item.userId === auth && !edit && (
          <UpdateDelBtn
            type={replycomm ? "replycomm" : "comment"}
            id={replycomm ? commentId : postId}
            setEdit={setEdit}
            setData={!replycomm && setData}
            deleteId={item.id}
          />
        )}
      </div>
      <article className={cx("user")}>
        <ProfilePhoto
          url={item.url}
          username={item.username}
          id={item.userId}
        />
        <div className={cx("right")}>
          <div className={cx("rightTop")}>
            <Username username={item.username} id={item.userId} />
            <div className={cx("line")}></div>
            <Time createdAt={item.createdAt} />
          </div>
          {edit ? (
            <div className={cx("comment")}>
              {replycomm ? (
                <ReplycommWrite
                  http={http}
                  commentId={commentId}
                  value={item}
                  setEdit={setEdit}
                  setShowReply={setShowReply}
                  setShowReplyWrite={setShowReplyWrite}
                />
              ) : (
                <CommentWrite
                  http={http}
                  id={postId}
                  setData={setData}
                  value={item}
                  setEdit={setEdit}
                />
              )}
            </div>
          ) : (
            <div className={cx("textarea")}>
              <Textarea value={item.text} readOnly={true} />
            </div>
          )}
        </div>
      </article>
      <article className={cx("buttons", { replycomm })}>
        {!replycomm && (
          <button
            onClick={() => setShowReply(!showReply)}
            className={cx("reply")}
          >
            {showReply ? "답글접기" : "답글보기"}
          </button>
        )}
        {auth && (
          <button
            className={cx("reply")}
            onClick={() => setShowReplyWrite(!showReplyWrite)}
          >
            {showReplyWrite ? "답글취소" : "답글쓰기"}
          </button>
        )}
      </article>
      <article className={cx("replyArea")}>
        {showReplyWrite && (
          <ReplycommWrite
            http={http}
            commentId={commentId}
            value={undefined}
            setShowReply={setShowReply}
            setShowReplyWrite={setShowReplyWrite}
          />
        )}
        {showReply && !replycomm && (
          <Replycomm postId={postId} commentId={commentId} item={item} />
        )}
      </article>
    </li>
  );
}

export default CommentContent;
