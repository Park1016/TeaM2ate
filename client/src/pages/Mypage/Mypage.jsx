import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { authState } from "state/auth";
import useCheckAuth from "hooks/useCheckAuth";
import MypageContent from "containers/MypageContent/MypageContent";
import Alert from "components/Alert/Alert";

const Mypage = (props) => {
  const auth = useRecoilValue(authState);
  const [check, setCheck] = useState(false);
  const [checkAuth] = useCheckAuth({ auth, setCheck, type: "alert" });

  useEffect(() => {
    checkAuth();
  }, [auth]);

  return <>{check ? <MypageContent /> : <Alert />}</>;
};

export default Mypage;
