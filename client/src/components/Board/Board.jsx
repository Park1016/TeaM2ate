import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import classNames from 'classnames/bind';

import styles from './Board.module.scss';

import { HttpSelector } from 'state/http';
import BoardApi from 'api/board';
import Filter from './Filter/Filter';
import Post from './Post/Post';


function Board(props) {

    const cx = classNames.bind(styles);
    const http = useRecoilValue(HttpSelector);
    const {isLoading, error, data} = useQuery(['board'], async()=>{
        return await new BoardApi(http).getBoard();
    });


    return (
        <>
            {isLoading && <p>Loading!</p>}
            {error && <p>Error!</p>}
            {data &&
                (<div>
                    <Filter />
                    <ul>
                        {data.map((item)=>(
                            <Post key={item.id} value={item}/>
                        ))}
                    </ul>
                </div>)
            }
        </>
    );
}

export default Board;