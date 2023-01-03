import CheckPw from "components/CheckPw/CheckPw";
import UpdatePw from "containers/UpdatePw/UpdatePw";
import React, { useState } from "react";

const Security = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {!show && <CheckPw setShow={setShow} />}
      {show && <UpdatePw />}
    </>
  );
};

export default Security;
