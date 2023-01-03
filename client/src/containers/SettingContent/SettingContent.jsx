import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import UserApi from "api/user";
import UpdateProfile from "containers/UpdateProfile/UpdateProfile";
import UpdatePw from "containers/UpdatePw/UpdatePw";

const SettingContent = ({ http }) => {
  const [show, setShow] = useState("profile");

  const { data: user } = useQuery(["mypageAuth"], async () => {
    return await new UserApi(http).me();
  });

  return (
    <>
      {user && (
        <section>
          <article>
            <p onClick={() => setShow("profile")}>프로필 수정</p>
            <p onClick={() => setShow("pw")}>비밀번호 수정</p>
          </article>
          <article>
            {show === "profile" && <UpdateProfile user={user} />}
            {show === "pw" && <UpdatePw user={user} />}
          </article>
        </section>
      )}
    </>
  );
};

export default SettingContent;
