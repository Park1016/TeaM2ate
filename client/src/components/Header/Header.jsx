import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const Header = () => {

    const cx = classNames.bind(styles);

    return (
        <header>
            <Link to={'/'}>main</Link>
        </header>
    );
};

export default Header;