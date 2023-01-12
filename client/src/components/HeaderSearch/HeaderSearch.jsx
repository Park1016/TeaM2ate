import React, { useState } from "react";
import classNames from "classnames/bind";

import { GoSearch } from "react-icons/go";

import styles from "./HeaderSearch.module.scss";
import Input from "components/Input/Input";
const HeaderSearch = (props) => {
  const cx = classNames.bind(styles);

  const [form, setForm] = useState({ search: "" });
  const [focus, setFocus] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form.search);
  };

  return (
    <form
      className={cx("container", { focus })}
      onSubmit={(e) => onSubmit(e)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <div className={cx("inputBox")}>
        <Input
          placeholder={"검색어를 입력하세요"}
          type={"text"}
          name={"search"}
          id={"search"}
          value={form.search}
          form={form}
          setForm={setForm}
        />
      </div>
      <GoSearch onClick={(e) => onSubmit(e)} />
    </form>
  );
};

export default HeaderSearch;
