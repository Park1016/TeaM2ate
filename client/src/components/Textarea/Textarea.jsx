import React from "react";

const Textarea = ({ name, id, value, form, setForm }) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <textarea name={name} id={id} value={value} onChange={(e) => onChange(e)} />
  );
};

export default Textarea;
