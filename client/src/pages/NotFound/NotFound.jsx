import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    alert("페이지를 찾을 수 없습니다");
    navigate("/");
  }, []);
  return <div>not Found!</div>;
};

export default NotFound;
