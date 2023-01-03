import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FramePost from "containers/FramePost/FramePost";

function BoardPost({ value }) {
  const navigate = useNavigate();

  const onGoToPost = () => {
    navigate(`post/${value.id}`);
  };

  return (
    <li onClick={onGoToPost}>
      <FramePost value={value} />
    </li>
  );
}

export default BoardPost;
