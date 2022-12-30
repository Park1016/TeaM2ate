import React, { useContext } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { HttpContext } from 'context/httpContext';
import UserApi from 'api/user';
import Search from 'components/Header/Search/Search';

const Header = () => {

    const cx = classNames.bind(styles);
    const { http } = useContext(HttpContext);

    const onLogout = async() => {
        return await new UserApi(http).logout();
    }

    return (
        <header>
            <Link to={'/'}>로고</Link>
            <Search />
            <Link to={'post/write'}>글쓰기</Link>
            <Link to={'login'}>로그인</Link>
            <p onClick={onLogout}>로그아웃</p>
        </header>
    );
};

export default Header;