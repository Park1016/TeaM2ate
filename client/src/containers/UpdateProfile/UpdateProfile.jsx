import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import { tagSelector } from "state/local";
import UserApi from "api/user";
import { makeFormData } from "hooks/makeFormData";
import Input from "components/Input/Input";
import Textarea from "components/Textarea/Textarea";
import SelectTag from "components/SelectTag/SelectTag";

const UpdateProfile = ({ http, user }) => {
  const _tag = useRecoilValue(tagSelector);
  const { id, url, username, introduce, alert, tag } = user;
  const [form, setForm] = useState({ url, username, introduce, alert, tag });
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const url = form.url;
    const username = form.username;
    const introduce = form.introduce;
    const alert = JSON.stringify(form.alert);
    const tag = JSON.stringify(form.tag);

    const formData = makeFormData({ url, username, introduce, alert, tag });

    try {
      const res = await new UserApi(http).update(id, formData);
      if (res) {
        window.alert("수정이 완료되었습니다");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <ul>
        <li>
          <p>프로필 사진</p>
          <p>{user.url}</p>
        </li>
        <li>
          <label htmlFor="username">닉네임</label>
          <Input
            type={"text"}
            name={"username"}
            id={"username"}
            value={form.username}
            form={form}
            setForm={setForm}
          />
        </li>
        <li>
          <label htmlFor="introduce">자기소개</label>
          <Textarea
            name={"introduce"}
            id={"introduce"}
            value={form.introduce}
            form={form}
            setForm={setForm}
          />
        </li>
      </ul>
      <SelectTag data={_tag} form={form} setForm={setForm} />
      <button type="button" onClick={() => navigate("/mypage")}>
        취소
      </button>
      <button type="submit">완료</button>
    </form>
  );
};

export default UpdateProfile;
