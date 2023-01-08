import CheckPw from "components/CheckPw/CheckPw";
import DeleteUser from "containers/DeleteUser/DeleteUser";
import UpdatePw from "containers/UpdatePw/UpdatePw";
import React, { useState } from "react";

const Security = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {!show && <CheckPw setShow={setShow} />}
      {show && (
        <>
          <UpdatePw />
          <DeleteUser />
        </>
      )}
    </>
  );
};

export default Security;
