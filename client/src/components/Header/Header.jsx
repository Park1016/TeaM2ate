import React from 'react';
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

import { HttpSelector } from 'state/http';
import UserApi from 'api/user';
import Search from 'components/Header/Search/Search';

const Header = () => {

    const cx = classNames.bind(styles);

    const http = useRecoilValue(HttpSelector);

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