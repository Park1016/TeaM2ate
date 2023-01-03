import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { httpSelector } from "state/http";
import CommentApi from "api/comment";
import CommentWrite from "containers/CommentWrite/CommentWrite";
import CommentContent from "containers/CommentContent/CommentContent";

function Comment(props) {
  const http = useRecoilValue(httpSelector);
  const { id } = useParams();
  const [data, setData] = useState();

  const { data: comment } = useQuery(["comment"], async () => {
    return await new CommentApi(http).getCommentByPostId(id);
  });

  useEffect(() => {
    if (comment) {
      setData(comment);
    }
  }, [comment]);

  return (
    <>
      <CommentWrite http={http} id={id} setData={setData} value={undefined} />
      {data && (
        <ul>
          {data.map((item, index) => (
            <CommentContent
              key={index}
              http={http}
              id={id}
              setData={setData}
              item={item}
              index={index}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default Comment;
