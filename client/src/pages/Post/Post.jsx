import React from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';

import styles from './Post.module.scss';

import { authState } from 'state/auth';
import { HttpSelector } from 'state/http';
import PostApi from 'api/post';
import FramePost from 'components/FramePost/FramePost';
import Comment from 'components/Comment/Comment';
import UpdateDelBtn from 'components/Common/UpdateDelBtn/UpdateDelBtn';

const Post = (props) => {

    const cx = classNames.bind(styles);
    const { id } = useParams();
    const http = useRecoilValue(HttpSelector);
    const auth = useRecoilValue(authState);
    const {isLoading, error, data} = useQuery(['post', id], async()=>{
        return await new PostApi(http).getPostById(id);
    });

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>error!</p>}
            {data &&
                <>
                    {data.userId === auth && <UpdateDelBtn type={'post'} id={id}/>}
                    <FramePost value={data} />
                    <Comment id={id}/>
                </>
            }
        </>
    )
}

export default Post;