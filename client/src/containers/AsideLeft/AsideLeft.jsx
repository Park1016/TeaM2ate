import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./AsideLeft.module.scss";
import useShowTag from "hooks/useShowTag";
import { useNavigate } from "react-router-dom";

const AsideLeft = (props) => {
  const cx = classNames.bind(styles);
  const [onShowTag] = useShowTag();
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setData(onShowTag());
  }, []);
  return (
    <>
      {data && (
        <aside className={cx("container")}>
          <p>인기있는 태그</p>
          <ul>
            {data &&
              data.map((item, index) => (
                <li key={index} onClick={() => navigate(`/?keyword=${item}`)}>
                  #{item}
                </li>
              ))}
          </ul>
        </aside>
      )}
    </>
  );
};
export default AsideLeft;
