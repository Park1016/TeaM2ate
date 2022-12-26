import React from 'react';

function PlusBtn({setShow}) {

    return (
        <button type="button" onClick={()=>setShow(true)}>더보기</button>
    );
}

export default PlusBtn;