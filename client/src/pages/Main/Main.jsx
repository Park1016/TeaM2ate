import React, { useContext } from 'react';
import styles from './Main.module.scss';
import classNames from 'classnames/bind';
import { DarkModeContext } from 'context/testContext';
import Board from 'components/Board/Board';


const Main = (props) => {
    const cx = classNames.bind(styles);
    // const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <section>
            {/* {darkMode?<p>true</p>:<p>false</p>}
            <button onClick={()=>toggleDarkMode()}>메인</button> */}
            <Board />
        </section>
    )
}

export default Main;