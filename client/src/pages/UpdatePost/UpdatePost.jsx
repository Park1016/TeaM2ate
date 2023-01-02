import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PostApi from 'api/post';

import { useRecoilValue } from 'recoil';
import { HttpSelector } from 'state/http';
import FrameWrite from 'components/FrameWrite/FrameWrite';
import { useQuery } from '@tanstack/react-query';

const UpdatePost = (props) => {

    const { id } = useParams();
    const http = useRecoilValue(HttpSelector);
    const { data } = useQuery(['post', id], async()=>{
        return await new PostApi(http).getPostById(id);
    });
    
    const [form, setForm] = useState();

    useEffect(()=>{
        if(data) {
            setForm({
                title: data.title,
                text: data.text,
                tag: data.tag,
                type: data.type,
                progress: data.progress
            })
        }
    }, [data]);


    return (
        <>
            {form && <FrameWrite form={form} setForm={setForm} editId={id} />}
        </>
    )
}

export default UpdatePost;