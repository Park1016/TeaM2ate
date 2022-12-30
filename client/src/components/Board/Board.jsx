import React, { useContext, useEffect } from 'react';
import styles from './Board.module.scss';
import classNames from 'classnames/bind';
import { useQuery } from '@tanstack/react-query';
import Filter from './Filter/Filter';
import BoardApi from 'api/board';
import Post from './Post/Post';
import { HttpContext } from 'context/httpContext';

function Board(props) {

    const cx = classNames.bind(styles);
    const http = useContext(HttpContext);
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