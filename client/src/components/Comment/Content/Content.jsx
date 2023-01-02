import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { authState } from 'state/auth';
import UpdateDelBtn from 'components/Common/UpdateDelBtn/UpdateDelBtn';
import Write from '../Write/Write';


function Content({ http, id, setData, item, index }) {


    const auth = useRecoilValue(authState);
    const [edit, setEdit] = useState(false);

    return (
        <li key={index}>
            {(item.userId === auth && !edit) && 
            <UpdateDelBtn type={'comment'} id={item.id} setEdit={setEdit}/>}
            <p>{item.username}</p>
            <p>{item.createdAt}</p>
            {edit ? 
            <Write http={http} id={id} setData={setData} value={item} setEdit={setEdit}/>:
            <p>{item.text}</p>}
        </li>
    );
}

export default Content;