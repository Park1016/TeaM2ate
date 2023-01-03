import Input from "components/Input/Input";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function FindAuth(props) {
  const [form, setForm] = useState({ email: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm("");
  };

  return (
    <section>
      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="email">이메일</label>
        <Input
          type={"email"}
          name={"email"}
          id={"email"}
          value={form.email}
          form={form}
          setForm={setForm}
        />
        <button type="submit">계정찾기</button>
      </form>
      <Link to={"/login"}>취소</Link>
    </section>
  );
}

export default FindAuth;
