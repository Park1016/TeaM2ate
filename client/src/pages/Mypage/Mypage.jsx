import React from "react";
import { useRecoilValue } from "recoil";

import { userState } from "state/user";
import UserPage from "containers/UserPage/UserPage";
import Alert from "components/Alert/Alert";

const Mypage = (props) => {
  const user = useRecoilValue(userState);

  return <>{user ? <UserPage user={user} mypage={true} /> : <Alert />}</>;
};

export default Mypage;
