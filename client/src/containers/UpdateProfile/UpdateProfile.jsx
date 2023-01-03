import UserApi from "api/user";
import Input from "components/Input/Input";
import Textarea from "components/Textarea/Textarea";
import { makeFormData } from "hooks/makeFormData";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateProfile = ({ http, user }) => {
  const { id, url, username, introduce, alert } = user;
  const [form, setForm] = useState({ url, username, introduce, alert });
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const url = form.url;
    const username = form.username;
    const introduce = form.introduce;
    const alert = JSON.stringify(form.alert);

    const formData = makeFormData({ url, username, introduce, alert });

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
      <button type="button" onClick={() => navigate("/mypage")}>
        취소
      </button>
      <button type="submit">완료</button>
    </form>
  );
};

export default UpdateProfile;
