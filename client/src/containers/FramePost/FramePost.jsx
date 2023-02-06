import React, { useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./FramePost.module.scss";

import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

import FrameType from "containers/FrameType/FrameType";
import ProfilePhoto from "components/ProfilePhoto/ProfilePhoto";
import Time from "components/Time/Time";
import Bookmark from "components/Bookmark/Bookmark";
import UpdateDelBtn from "components/UpdateDelBtn/UpdateDelBtn";
import Username from "components/Username/Username";

const FramePost = ({ value, board, postId, http, user }) => {
  const cx = classNames.bind(styles);
  const {
    url,
    id,
    title,
    text,
    createdAt,
    view,
    type,
    tag,
    progress,
    username,
    userId,
  } = value;

  return (
    <>
      <article className={cx("article")}>
        <p className={cx("title", { board })}>{title}</p>
        <ul className={cx("proTime", { board })}>
          <li className={cx("progress", { done: progress === "done" })}>
            {progress === "ing" ? "모집중" : "모집마감"}
          </li>
          <li>
            <Time createdAt={createdAt} />
          </li>
        </ul>
        <div className={cx("top")}>
          <div className={cx("topLeft")}>
            <ProfilePhoto url={url} username={username} id={userId} />
            <div>
              <Username username={username} id={userId} />
              {/* <div className={cx("line")}></div>
              <Time createdAt={createdAt} /> */}
            </div>
          </div>
          {!board && (
            <div className={cx("topRight")}>
              {user && <Bookmark id={postId} http={http} user={user} />}
              {(user.id === "padhmijn" || user.id === userId) && (
                <UpdateDelBtn type={"post"} id={postId} />
              )}
            </div>
          )}
        </div>
      </article>
      {!board && (
        <article className={cx("editor")}>
          <Viewer initialValue={text} />
        </article>
      )}
      {Array.isArray(tag) && tag.length !== 0 && (
        <div className={cx("tag")}>
          {tag.map((item, index) => (
            <p key={`tag${index}`}>#{item}</p>
          ))}
        </div>
      )}
      <article className={cx("type")}>
        <p className={cx("typeTitle")}>모집 현황</p>
        <FrameType type={type} />
      </article>
    </>
  );
};

export default FramePost;
