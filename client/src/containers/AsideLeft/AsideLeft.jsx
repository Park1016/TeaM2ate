import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./AsideLeft.module.scss";
import useShowTag from "hooks/useShowTag";
import { useNavigate } from "react-router-dom";
import { useCheckPageOut } from "hooks/useCheckPageOut";

const AsideLeft = (props) => {
  const cx = classNames.bind(styles);
  const [onShowTag] = useShowTag();
  const [data, setData] = useState();
  const navigate = useNavigate();
  const [onCheckPageOut] = useCheckPageOut();

  const onClick = (item) => {
    if (onCheckPageOut()) {
      navigate(`/?keyword=${item}`);
    }
  };

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
                <li key={index} onClick={() => onClick(item)}>
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
