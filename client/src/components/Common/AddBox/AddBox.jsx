import EditType from 'components/Type/EditType';
import React, { useEffect, useState } from 'react';

function AddBox({form, setForm, type}) {

    const [data, setData] = useState({show: false, item: null});

    const onDelete = (item) => {
        const obj = form.type.filter((x)=>(Object.keys(x)[0] !== Object.keys(item)[0]));
        setForm({ ...form, type: obj });
    }

    const onEdit = (item) => {
        setData({show: true, item});
    }

    return (
        <> 
            <ul>
                {type.map((item, index)=>(
                    <li key={index}>
                        <div onClick={()=>onEdit(item)}>
                            <p>{Object.keys(item)}</p>
                            <div>
                                <span>{Object.values(item)[0].num}</span>
                                <span>/</span>
                                <span>{Object.values(item)[0].totalNum}</span>
                            </div>
                        </div>
                        <p onClick={()=>onDelete(item)}>삭제</p>
                    </li>
                ))}
            </ul>
            {data.show && <EditType form={form} setForm={setForm} data={data} setData={setData}/>}
        </>
    );
}

export default AddBox;