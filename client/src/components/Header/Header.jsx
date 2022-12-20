import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Search from 'components/Header/Search/Search';

const Header = () => {

    const cx = classNames.bind(styles);

    return (
        <header>
            <Link to={'/'}>로고</Link>
            <Search />
            <Link to={'post/write'}>글쓰기</Link>
            <Link to={'login'}>로그인</Link>
        </header>
    );
};

export default Header;