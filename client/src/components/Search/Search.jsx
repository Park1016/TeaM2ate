import React, { useState } from 'react';
import Select from 'react-select';
import { useImmer } from 'use-immer';

function Search({ data, form, setForm }) {

    const onChange = (e) => {
        setForm({ ...form, tag: e.map((item)=>item.value)});
    }


    return (
        <div>
            <Select
                onChange={(e)=>onChange(e)}
                isMulti={true}
                placeholder={'태그를 선택하세요'}
                options={data}
            /> 
        </div>
    );
}

export default Search;