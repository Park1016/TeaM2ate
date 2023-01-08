import React, { useCallback } from "react";

const Input = ({ type, name, id, value, form, setForm, readOnly }) => {
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
      readOnly={readOnly}
    />
  );
};

export default Input;
