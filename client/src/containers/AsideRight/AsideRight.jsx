import React from "react";
import classNames from "classnames/bind";

import styles from "./AsideRight.module.scss";

const AsideRight = (props) => {
  const cx = classNames.bind(styles);
  const onMove = (url) => {
    window.open(url);
  };

  return (
    <aside className={cx("container")}>
      <article onClick={() => onMove("https://travelhere.netlify.app/")}>
        여행
      </article>
      <article onClick={() => onMove("https://park1016.vercel.app/")}>
        포트폴리오
      </article>
    </aside>
  );
};
export default AsideRight;
