import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { useQuery } from "@tanstack/react-query";

import { httpSelector } from "state/http";
import { authState } from "state/auth";
import UserApi from "api/user";
import UpdateProfile from "containers/UpdateProfile/UpdateProfile";
import Security from "containers/Security/Security";

const SettingContent = (props) => {
  const auth = useRecoilValue(authState);
  const http = useRecoilValue(httpSelector);
  const [show, setShow] = useState("profile");
  const { data: user } = useQuery(["settingAuth"], async () => {
    if (auth) {
      return await new UserApi(http).me();
    } else {
      return false;
    }
  });

  return (
    <>
      {user && (
        <section>
          <article>
            <p onClick={() => setShow("profile")}>프로필</p>
            <p onClick={() => setShow("security")}>계정</p>
          </article>
          <article>
            {show === "profile" && <UpdateProfile http={http} user={user} />}
            {show === "security" && <Security />}
          </article>
        </section>
      )}
    </>
  );
};

export default SettingContent;
