import React from 'react';
import { useQuery } from '@tanstack/react-query';

function FramePost({value}) {

    const {id, title, text, createdAt, view, type, tag, progress, username, url} = value;
    
    const {isLoading, error, data} = useQuery(['type'], ()=>{
        return Object.entries(type[0]);
    });

    return (
        <>
            {isLoading && <p>isLoading</p>}
            {error && <p>error</p>}
            {data &&
            <>
                <div>
                    <div>{url ? url : username}</div>
                    <div>
                        <p>{title}</p>
                        <p>{createdAt}</p>
                    </div>
                </div>
                <div>
                    {tag.map((item, index)=>(<p key={`tag${index}`}>{item}</p>))}
                </div>
                <p>{text}</p>
                <div>
                    {data.map((item, index)=>(
                        <div key={`type${index}`}>
                            <p>{item[0]}</p>
                            <div>
                                <p>{item[1].num}</p>
                                <p>/</p>
                                <p>{item[1].max}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </>}
        </>
    );
}

export default FramePost;