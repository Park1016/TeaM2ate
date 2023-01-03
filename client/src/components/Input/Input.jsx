import React from "react";

const Input = ({ type, name, id, value, form, setForm }) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
};

export default Input;
