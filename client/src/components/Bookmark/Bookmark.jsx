import React, { useEffect, useState } from "react";

import UserApi from "api/user";
import { makeFormData } from "hooks/makeFormData";

const Bookmark = ({ id, http, user }) => {
  const [bookmark, setBookmark] = useState(false);

  const column = "bookmark";
  const formData = makeFormData({ column, id });

  const onClick = async () => {
    if (bookmark) {
      await new UserApi(http).removeList(formData);
    } else {
      await new UserApi(http).addList(formData);
    }
    setBookmark(!bookmark);
  };

  useEffect(() => {
    console.log(user.bookmark.includes(id));
    if (user.bookmark.includes(id)) {
      setBookmark(true);
    } else {
      setBookmark(false);
    }
  }, []);
  return (
    <button type="button" onClick={onClick}>
      {bookmark ? "북마크됨" : "북마크안됨"}
    </button>
  );
};

export default Bookmark;
