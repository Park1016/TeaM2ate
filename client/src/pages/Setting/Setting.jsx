import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { authState } from "state/auth";
import useCheckAuth from "hooks/useCheckAuth";
import SettingContent from "containers/SettingContent/SettingContent";
import Alert from "components/Alert/Alert";

const Setting = (props) => {
  const auth = useRecoilValue(authState);
  const [check, setCheck] = useState(false);
  const [checkAuth] = useCheckAuth({ auth, setCheck, type: "alert" });

  useEffect(() => {
    checkAuth();
  }, [auth]);

  return <>{check ? <SettingContent /> : <Alert />}</>;
};

export default Setting;
