import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useQuery } from "@tanstack/react-query";

import { httpSelector } from "state/http";
import { authState } from "state/auth";
import UserApi from "api/user";
import UserPage from "containers/UserPage/UserPage";

const MypageContent = (props) => {
  const http = useRecoilValue(httpSelector);
  const auth = useRecoilValue(authState);

  const { data: user } = useQuery(["mypageAuth"], async () => {
    if (auth) {
      return await new UserApi(http).me();
    } else {
      return false;
    }
  });

  return <>{user && <UserPage user={user} http={http} mypage={true} />}</>;
};

export default MypageContent;
