import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./User.module.scss";

import { httpSelector } from "state/http";
import UserApi from "api/user";
import UserPage from "containers/UserPage/UserPage";
// import useHttp from "hooks/useHttp";

const User = (props) => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  const http = useRecoilValue(httpSelector);
  // const [makeHttp] = useHttp({ http });
  const { id } = useParams();
  const { data: user } = useQuery(["user"], async () => {
    return await new UserApi(http).getById(id);
  });

  // useEffect(() => {
  //   makeHttp();
  // }, [http]);

  useEffect(() => {
    if (!user) {
      alert("존재하지 않는 회원입니다");
      navigate("/");
    }
  }, [user]);

  return <>{user && <UserPage user={user} http={http} mypage={false} />}</>;
};

export default User;
