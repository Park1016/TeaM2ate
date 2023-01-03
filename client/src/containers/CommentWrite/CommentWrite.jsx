import React, { useEffect, useRef, useState } from "react";

import { makeFormData } from "hooks/makeFormData";
import CommentApi from "api/comment";

function CommentWrite({ http, id, setData, value, setEdit }) {
  const [comment, setComment] = useState("");
  const input = useRef(null);

  const onChange = (value) => {
    setComment(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (comment.length === 0) {
      alert("댓글을 입력해주세요");
      return;
    }

    const postId = id;
    const text = comment;
    const formData = makeFormData({ postId, text });

    if (value) {
      await new CommentApi(http).updateComment(formData, value.id);
      setEdit(false);
    } else {
      await new CommentApi(http).writeComment(formData);
    }
    const res = await new CommentApi(http).getCommentByPostId(id);
    setData(res);
    setComment("");
    if (input.current) {
      input.current.value = "";
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        ref={input}
        type="text"
        name="comment"
        id="comment"
        defaultValue={value ? value.text : ""}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button type="button" onClick={() => setEdit(false)}>
          취소
        </button>
      )}
      <button type="submit">등록</button>
    </form>
  );
}

export default CommentWrite;
