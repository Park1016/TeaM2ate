import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./ReplycommWrite.module.scss";

import { makeFormData } from "hooks/makeFormData";
import ReplycommApi from "api/replycomm";
import Textarea from "components/Textarea/Textarea";
import CommonBtn from "components/CommonBtn/CommonBtn";
import { replyState } from "state/reply";

function ReplycommWrite({
  http,
  commentId,
  value,
  setEdit,
  setShowReply,
  setShowReplyWrite,
}) {
  const cx = classNames.bind(styles);
  const { id } = useParams();
  const [form, setForm] = useState({ reply: value ? value.text : "" });
  const setReply = useSetRecoilState(replyState);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.reply.length === 0) {
      alert("댓글을 입력해주세요");
      return;
    }

    const postId = id;
    const text = form.reply;
    const formData = makeFormData({ postId, commentId, text });

    if (value) {
      await new ReplycommApi(http).updateReplycomm(formData, value.id);
      setEdit(false);
    } else {
      await new ReplycommApi(http).writeReplycomm(formData);
    }
    const res = await new ReplycommApi(http).getReplyCommByCommentId(commentId);

    setReply(res);
    setForm({ reply: "" });
    setShowReply(true);
    setShowReplyWrite(false);
  };

  return (
    <form className={cx("container")} onSubmit={(e) => onSubmit(e)}>
      <div className={cx("textarea")}>
        <Textarea
          name={"reply"}
          id={"reply"}
          value={form.reply}
          placeholder={"답글을 입력하세요"}
          form={form}
          setForm={setForm}
        />
      </div>
      <div className={cx("button")}>
        <CommonBtn type={"submit"} color={"blue"} text={"등록"} />
        {value && (
          <div onClick={() => setEdit(false)}>
            <CommonBtn type={"button"} color={"white"} text={"취소"} />
          </div>
        )}
      </div>
    </form>
  );
}

export default ReplycommWrite;
