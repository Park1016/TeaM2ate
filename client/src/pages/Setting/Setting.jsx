import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { userState } from "state/user";
import SettingContent from "containers/SettingContent/SettingContent";
import Alert from "components/Alert/Alert";

const Setting = (props) => {
  const user = useRecoilValue(userState);

  const preventClose = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  useEffect(() => {
    if (user) {
      window.addEventListener("beforeunload", preventClose);
    }
    return () => {
      if (user) {
        window.removeEventListener("beforeunload", preventClose);
      }
    };
  }, []);

  return <>{user ? <SettingContent /> : <Alert />}</>;
};

export default Setting;
