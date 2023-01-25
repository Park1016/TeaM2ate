import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./HeaderSearch.module.scss";

import { GoSearch } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

import Input from "components/Input/Input";

const HeaderSearch = ({ auth }) => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();

  const [form, setForm] = useState({ search: "" });
  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.search.length < 2) {
      alert("검색어를 두글자 이상 입력해주세요");
      return;
    }
    navigate(`/?keyword=${form.search}`);
    setForm({ search: "" });
  };

  return (
    <>
      <form
        className={cx("container", { focus, search })}
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
        <GoSearch className={cx("find")} onClick={(e) => onSubmit(e)} />
        <AiFillCloseCircle
          className={cx("close")}
          onClick={() => setSearch(false)}
        />
      </form>
      <div className={cx("iconBox", { search, auth })}>
        <div onClick={() => setSearch(true)}>
          <GoSearch className={cx("resFind")} />
        </div>
      </div>
    </>
  );
};

export default HeaderSearch;
