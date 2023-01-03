import React, { useState } from "react";

import { makeFormData } from "hooks/makeFormData";
import CommentApi from "api/comment";

function CommentWrite({ http, id, setData, value, setEdit }) {
  const [comment, setComment] = useState("");

  const onChange = (value) => {
    setComment(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

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
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
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
