import React from "react";
import classNames from "classnames/bind";

import styles from "./ProfilePhoto.module.scss";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ProfilePhoto = ({ url, username, mypage, id }) => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();

  const onMove = () => {
    if (mypage) {
      return;
    }
    navigate(`/user/${id}`);
  };

  return (
    <>
      {url.length === 0 ? (
        // <p className={cx("nonePhoto", { mypage })}>
        //   {username.substring(0, 1)}
        // </p>
        <IoPersonCircleSharp
          className={cx("nonePhoto", { mypage })}
          onClick={onMove}
        />
      ) : (
        <img src={url} />
      )}
    </>
  );
};

export default ProfilePhoto;
