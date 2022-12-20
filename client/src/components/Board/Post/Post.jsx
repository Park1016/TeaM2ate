import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FramePost from 'components/FramaPost/FramePost';

function Post({value}) {

    const navigate = useNavigate();

    const onGoToPost = () => {
        navigate(`post/${value.id}`);
    }

    return (
        <li onClick={onGoToPost}>
            <FramePost value={value}/>
        </li>
    );
}

export default Post;