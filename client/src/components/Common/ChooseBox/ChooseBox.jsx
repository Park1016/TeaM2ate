import React from 'react';

function ChooseBox({form, setForm, data}) {

    const onClick = (value) => {
        setForm({...form, progress: value});
    }

    return (
        <ul>
            {data.map((item, index)=>(
                <li key={index} onClick={()=>onClick(item.value)}>{item.name}</li>
            ))}
        </ul>
    );
}

export default ChooseBox;