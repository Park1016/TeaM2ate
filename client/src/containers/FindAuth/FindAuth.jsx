import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./FindAuth.module.scss";

import FindPw from "containers/FindPw/FindPw";
import CertEmail from "components/CertEmail/CertEmail";
import { modalState } from "state/modal";
import { useSetRecoilState } from "recoil";
import CommonBtn from "components/CommonBtn/CommonBtn";

function FindAuth(props) {
  const cx = classNames.bind(styles);
  const setModal = useSetRecoilState(modalState);
  const [form, setForm] = useState({ email: "", username: "" });
  const [checkEmail, setCheckEmail] = useState(false);

  const onCloseCheck = () => {
    if (!window.confirm("진행상황이 초기화됩니다. 취소하시겠습니까?")) {
      return;
    }
    setModal({
      login: true,
      signup: false,
      find: false,
    });
  };

  return (
    <section className={cx("container")}>
      {!checkEmail && (
        <CertEmail
          form={form}
          setForm={setForm}
          setCheckEmail={setCheckEmail}
          checkDup={false}
        />
      )}
      {checkEmail && <FindPw user={form} />}
      <div className={cx("cancelBtn")} onClick={onCloseCheck}>
        <CommonBtn type={"button"} color={"white"} text={"취소"} />
      </div>
    </section>
  );
}

export default FindAuth;
