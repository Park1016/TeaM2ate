import EditType from 'components/Type/EditType';
import React, { useEffect, useState } from 'react';

function FrameType({ type, form, setForm }) {
    const [data, setData] = useState({show: false, item: null});

    const onDelete = (item) => {
        const obj = form.type.filter((x)=>(Object.keys(x)[0] !== Object.keys(item)[0]));
        setForm({ ...form, type: obj });
    }

    const onEdit = (item) => {
        if(!form) {
            return;
        }
        setData({show: true, item});
    }

    return (
        <> 
            {type.length !== 0 && <ul>
                {type.map((item, index)=>(
                    <li key={index}>
                        <div onClick={()=>onEdit(item)}>
                            <p>{Object.keys(item)}</p>
                            <div>
                                <p>{Object.values(item)[0].num}</p>
                                <p>/</p>
                                <p>{Object.values(item)[0].totalNum}</p>
                            </div>
                        </div>
                        {form && <p onClick={()=>onDelete(item)}>삭제</p>}
                    </li>
                ))}
            </ul>}
            {data.show && <EditType form={form} setForm={setForm} data={data} setData={setData}/>}
        </>
    );
}

export default FrameType;