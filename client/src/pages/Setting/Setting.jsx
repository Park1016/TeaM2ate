import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { authState } from "state/auth";
import { httpSelector } from "state/http";
import { checkAuth } from "hooks/checkAuth";
import SettingContent from "containers/SettingContent/SettingContent";

const Setting = (props) => {
  const http = useRecoilValue(httpSelector);
  const auth = useRecoilValue(authState);

  useEffect(() => {
    checkAuth(auth);
  }, [auth]);

  return <>{auth && <SettingContent http={http} />}</>;
};

export default Setting;
