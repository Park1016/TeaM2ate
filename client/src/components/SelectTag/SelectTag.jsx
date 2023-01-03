import React, { useEffect, useState } from "react";
import Select from "react-select";

function SelectTag({ data, form, setForm }) {
  const [defaultvalue, setDefaultValue] = useState(null);
  const onChange = (e) => {
    setForm({ ...form, tag: e.map((item) => item.value) });
  };

  useEffect(() => {
    const res = data.filter((x) => form.tag.includes(x.value));
    setDefaultValue(res);
  }, []);

  return (
    <div>
      {defaultvalue && (
        <Select
          onChange={(e) => onChange(e)}
          isMulti={true}
          placeholder={"태그를 선택하세요"}
          options={data}
          defaultValue={defaultvalue}
        />
      )}
    </div>
  );
}

export default SelectTag;
