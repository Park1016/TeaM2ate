import React from 'react';

function SelectBox({value, data, defaultValue, disabled}) {

    const onChange = (target) => {
        data(target);
    }

    return (
        <select onChange={(e)=>onChange(e.target.value)} disabled={disabled}>
            {defaultValue && <option defaultValue={""} hidden>{defaultValue}</option>}
            {value.map((item, index)=>(
                <option key={index} value={item.value}>{item.name}</option>
            ))}
        </select>
    );
}

export default SelectBox;