import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import classNames from "classnames/bind";

import styles from "./CommentWrite.module.scss";

import { makeFormData } from "hooks/makeFormData";
import CommentApi from "api/comment";
import { commentState } from "state/comment";
import { modalState } from "state/modal";
import Textarea from "components/Textarea/Textarea";
import CommonBtn from "components/CommonBtn/CommonBtn";

function CommentWrite({ http, id, value, setEdit, readOnly }) {
  const cx = classNames.bind(styles);
  const [form, setForm] = useState({ comment: value ? value.text : "" });
  const setModal = useSetRecoilState(modalState);
  const setComment = useSetRecoilState(commentState);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.comment.length === 0) {
      alert("댓글을 입력해주세요");
      return;
    }

    const postId = id;
    const text = form.comment;
    const formData = makeFormData({ postId, text });

    if (value) {
      await new CommentApi(http).updateComment(formData, value.id);
      setEdit(false);
    } else {
      await new CommentApi(http).writeComment(formData);
    }
    const res = await new CommentApi(http).getCommentByPostId(id);
    setComment(res);
    setForm({ comment: "" });
  };

  return (
    <>
      {!readOnly && (
        <form className={cx("container")} onSubmit={(e) => onSubmit(e)}>
          <article className={cx("textarea")}>
            <Textarea
              name={"comment"}
              id={"comment"}
              value={form.comment}
              placeholder={readOnly ? "" : "댓글을 입력하세요"}
              form={form}
              setForm={setForm}
            />
          </article>
          <article className={cx("button")}>
            <CommonBtn type={"submit"} color={"blue"} text={"등록"} />
            {value && (
              <div onClick={() => setEdit(false)}>
                <CommonBtn type={"button"} color={"white"} text={"취소"} />
              </div>
            )}
          </article>
        </form>
      )}
      {readOnly && (
        <div className={cx("readOnly")}>
          <span
            onClick={() =>
              setModal({ login: true, signup: false, find: false })
            }
          >
            로그인
          </span>
          후 댓글 작성이 가능합니다
        </div>
      )}
    </>
  );
}

export default CommentWrite;
