import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import classNames from "classnames/bind";

import styles from "./SettingContent.module.scss";

import { httpSelector } from "state/http";
import { userState } from "state/user";
import UpdateProfile from "containers/UpdateProfile/UpdateProfile";
import Security from "containers/Security/Security";
// import useHttp from "hooks/useHttp";

const SettingContent = (props) => {
  const cx = classNames.bind(styles);
  const user = useRecoilValue(userState);
  const http = useRecoilValue(httpSelector);
  // const [makeHttp] = useHttp({ http });
  const [show, setShow] = useState("profile");

  // useEffect(() => {
  //   makeHttp();
  // }, [http]);

  return (
    <>
      {user && (
        <section className={cx("container")}>
          <div className={cx("content")}>
            <article className={cx("cate")}>
              <p
                className={cx("cateText", { focus: show === "profile" })}
                onClick={() => setShow("profile")}
              >
                내 프로필
              </p>
              <p
                className={cx("cateText", { focus: show === "security" })}
                onClick={() => setShow("security")}
              >
                계정
              </p>
            </article>
            <article className={cx("box")}>
              {show === "profile" && <UpdateProfile http={http} user={user} />}
              {show === "security" && <Security />}
            </article>
          </div>
        </section>
      )}
    </>
  );
};

export default SettingContent;
