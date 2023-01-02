import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { HttpSelector } from 'state/http';
import CommentApi from 'api/comment';
import Content from './Content/Content';
import Write from './Write/Write';

function Comment(props) {

    const http = useRecoilValue(HttpSelector);
    const { id } = useParams();
    const [data, setData] = useState();

    const {data: comment} = useQuery(['comment'], async() => {
        return await new CommentApi(http).getCommentByPostId(id);
    });

    useEffect(()=>{
        if(comment) {
            setData(comment);
        }
    }, [comment]);


    return (
        <>
            <Write http={http} id={id} setData={setData} value={undefined} />
            {data && 
            <ul>
                {data.map((item, index)=>(
                    <Content http={http} id={id} setData={setData} item={item} index={index} />
                ))}
            </ul>}
        </>
    );
}

export default Comment;