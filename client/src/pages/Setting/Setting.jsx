import React from "react";
import { useRecoilValue } from "recoil";

import { userState } from "state/user";
import SettingContent from "containers/SettingContent/SettingContent";
import Alert from "components/Alert/Alert";

const Setting = (props) => {
  const user = useRecoilValue(userState);

  return <>{user ? <SettingContent /> : <Alert />}</>;
};

export default Setting;
