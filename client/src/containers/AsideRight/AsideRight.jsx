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
        <div className={cx("travel")}></div>
        <div>
          <p>Travel here</p>
          <p>React, Redux, Firebase</p>
          <button type="button">보러가기</button>
        </div>
      </article>
      <article
        onClick={() => onMove("https://search-naver-movie.netlify.app/")}
      >
        <div className={cx("movie")}></div>
        <div>
          <p>Search Naver Movie</p>
          <p>React, PostCss</p>
          <button type="button">보러가기</button>
        </div>
      </article>
    </aside>
  );
};
export default AsideRight;
