import React, { useRef } from "react";
import classNames from "classnames/bind";

import styles from "./Textarea.module.scss";

const Textarea = ({ name, id, value, placeholder, form, setForm }) => {
  const cx = classNames.bind(styles);
  const textarea = useRef(null);
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const autoResizeTextarea = () => {
    if (textarea.current) {
      textarea.current.style.height = "auto";
      let height = textarea.current.scrollHeight;
      textarea.current.style.height = `${height + 16}px`;
    }
  };
  return (
    <textarea
      ref={textarea}
      type="text"
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      defaultValue={value ? value.text : ""}
      maxLength="1200"
      className={cx("textarea")}
      onKeyDown={autoResizeTextarea}
      onKeyUp={autoResizeTextarea}
      onChange={(e) => onChange(e)}
    />
  );
};

export default Textarea;
