import React, { useCallback } from "react";
import classNames from "classnames/bind";

import styles from "./Input.module.scss";

import { isNameForm, isPasswordForm } from "hooks/formatChecker";
const Input = ({
  placeholder,
  type,
  name,
  id,
  value,
  form,
  setForm,
  readOnly,
  setText,
}) => {
  const cx = classNames.bind(styles);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (id === "name") {
      if (value.length === 0) {
        setText(false);
      } else if (isNameForm(value) === false) {
        setText("2~20자 한글 또는 영문만 입력해주세요");
      } else {
        setText(false);
      }
    }
    if (id === "username") {
      if (value.length === 0) {
        setText(false);
      } else if (value.length < 3 || value.length > 7) {
        setText("3~7자 사이로 입력해주세요");
      } else {
        setText(false);
      }
    }
    if (id === "password") {
      if (value.length === 0) {
        setText(false);
      } else if (isPasswordForm(value) === false || value.length > 12) {
        setText("8~12자 영문/숫자/특수문자를 포함해주세요");
      } else {
        setText(false);
      }
    }
  };

  return (
    <input
      className={cx("container")}
      placeholder={placeholder}
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={(e) => onChange(e)}
      readOnly={readOnly}
    />
  );
};

export default Input;
