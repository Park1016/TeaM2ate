import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./UpdateDelBtn.module.scss";
import { FiMoreVertical } from "react-icons/fi";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";

// import useHttp from "hooks/useHttp";
import { httpSelector } from "state/http";
import { replyState } from "state/reply";
import CommentApi from "api/comment";
import PostApi from "api/post";
import ReplycommApi from "api/replycomm";

function UpdateDelBtn({ type, id, setEdit, setData, deleteId }) {
  const cx = classNames.bind(styles);
  const setReply = useSetRecoilState(replyState);
  const [show, setShow] = useState(false);

  const http = useRecoilValue(httpSelector);
  // const [makeHttp] = useHttp({ http });

  const navigate = useNavigate();

  const onUpdate = async () => {
    switch (type) {
      case "post":
        navigate(`/post/update/${id}`);
        break;
      case "comment":
      case "replycomm":
        setEdit(true);
        break;
      default:
        break;
    }
  };

  const onDelete = async () => {
    const check = window.confirm(
      `${
        type === "post" ? "게시글을" : type === "comment" ? "댓글을" : "답글을"
      } 삭제하시겠습니까?`
    );
    if (!check) {
      return;
    }
    switch (type) {
      case "post":
        await new PostApi(http).deletePost(id);
        alert("게시글이 삭제되었습니다");
        navigate("/");
        break;
      case "comment":
        await new CommentApi(http).deleteComment(deleteId);
        const comment = await new CommentApi(http).getCommentByPostId(id);
        // console.log(">>>", comment, "!!!", id);
        setData(comment);
        // alert("댓글이 삭제되었습니다");
        break;
      case "replycomm":
        await new ReplycommApi(http).deleteReplycomm(deleteId);
        const replycomm = await new ReplycommApi(http).getReplyCommByCommentId(
          id
        );
        // console.log(">>>222>>>", replycomm, "!!!", id);
        // setData(replycomm);
        setReply(replycomm);
        // alert("댓글이 삭제되었습니다");
        break;
      default:
        break;
    }
    setShow(false);
  };

  // useEffect(() => {
  //   makeHttp();
  // }, [http]);

  return (
    <div className={cx("container")}>
      <button
        className={cx("button")}
        type="button"
        onMouseDown={() => setShow(!show)}
        onBlur={() => setShow(false)}
      >
        <FiMoreVertical />
      </button>
      {show && (
        <ul className={cx("toggle")}>
          <li onMouseDown={onUpdate}>
            <FaPencilAlt />
            <p>수정</p>
          </li>
          <li onMouseDown={onDelete}>
            <RiDeleteBin2Line />
            <p>삭제</p>
          </li>
        </ul>
      )}
    </div>
  );
}

export default UpdateDelBtn;
