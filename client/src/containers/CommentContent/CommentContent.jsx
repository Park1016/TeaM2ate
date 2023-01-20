import React, { useState } from "react";
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

function CommentContent({ http, id, setData, item, index }) {
  const cx = classNames.bind(styles);
  const auth = useRecoilValue(authState);
  const [edit, setEdit] = useState(false);

  return (
    <li className={cx("list")} key={index}>
      <div className={cx("icon")}>
        {item.userId === auth && !edit && (
          <UpdateDelBtn
            type={"comment"}
            id={item.id}
            setEdit={setEdit}
            setData={setData}
          />
        )}
      </div>
      <ProfilePhoto url={item.url} username={item.username} id={item.userId} />
      <div className={cx("right")}>
        <div className={cx("rightTop")}>
          <Username username={item.username} id={item.userId} />
          <div className={cx("line")}></div>
          <Time createdAt={item.createdAt} />
        </div>
        {edit ? (
          <div className={cx("comment")}>
            <CommentWrite
              http={http}
              id={id}
              setData={setData}
              value={item}
              setEdit={setEdit}
            />
          </div>
        ) : (
          <div className={cx("textarea")}>
            <Textarea value={item.text} readOnly={true} />
          </div>
        )}
      </div>
    </li>
  );
}

export default CommentContent;
