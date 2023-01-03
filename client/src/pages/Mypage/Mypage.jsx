import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { httpSelector } from "state/http";
import { authState } from "state/auth";
import { useNavigate } from "react-router-dom";
import MypageContent from "containers/MypageContent/MypageContent";
import { checkAuth } from "hooks/checkAuth";

const Mypage = (props) => {
  const http = useRecoilValue(httpSelector);
  const auth = useRecoilValue(authState);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth(auth);
  }, [auth]);

  return <>{auth && <MypageContent http={http} />}</>;
};

export default Mypage;
