import Input from "components/Input/Input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateProfile = ({ user }) => {
  const { url, username, introduce } = user;
  const [form, setForm] = useState({ url, username, introduce });
  const navigate = useNavigate();

  return (
    <form>
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
          <Input
            type={"text"}
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
