import React from "react";
import classNames from "classnames/bind";

import styles from "./ProfilePhoto.module.scss";

const ProfilePhoto = ({ url, username }) => {
  const cx = classNames.bind(styles);
  return (
    <>
      {url.length === 0 ? (
        <p className={cx("nonePhoto")}>{username.substring(0, 1)}</p>
      ) : (
        <img src={url} />
      )}
    </>
  );
};

export default ProfilePhoto;
