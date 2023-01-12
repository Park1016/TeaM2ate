import React, { useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./FramePost.module.scss";

import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

import FrameType from "containers/FrameType/FrameType";
import ProfilePhoto from "components/ProfilePhoto/ProfilePhoto";
import Time from "components/Time/Time";

const FramePost = ({ value, board }) => {
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
  } = value;

  return (
    <>
      <article className={cx("article")}>
        <p className={cx("title", { board })}>{title}</p>
        <div className={cx("top")}>
          <ProfilePhoto url={url} username={username} />
          <div className={cx("topRight")}>
            <p className={cx("name")}>{username}</p>
            <div className={cx("line")}></div>
            <Time createdAt={createdAt} />
          </div>
        </div>
      </article>
      {tag.length !== 0 && (
        <div className={cx("tag")}>
          {tag.map((item, index) => (
            <p key={`tag${index}`}>#{item}</p>
          ))}
        </div>
      )}
      {!board && (
        <article className={cx("editor")}>
          <Viewer initialValue={text} />
        </article>
      )}
      <article className={cx("type")}>
        <p className={cx("typeTitle")}>모집 현황</p>
        <FrameType type={type} />
      </article>
    </>
  );
};

export default FramePost;
