import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Link, useNavigate } from 'react-router-dom';

import { HttpSelector } from 'state/http';
import { authState } from 'state/auth';
import UserApi from 'api/user';
import makeFormData from 'hooks/makeFormData';

const Login = (props) => {

    const navigate = useNavigate();
    const http = useRecoilValue(HttpSelector);
    const setAuth = useSetRecoilState(authState);
    const [form, setForm] = useState({ id: '', pw: '' });

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const onSubmit = async(e) => {
        e.preventDefault();

        const username = form.id;
        const password = form.pw;

        const formData = makeFormData({username, password});

        const res = await new UserApi(http).login(formData);
        // localStorage.setItem('token', res.token);
        // setAuth(res.accessToken);
        setAuth(res.id);
        setForm({ id: '', pw: '' });
        navigate('/');
    }

    return (
        <section>
            <form onSubmit={(e)=>onSubmit(e)}>
                <label htmlFor="id">Id</label>
                <input type="text" name="id" id="id" value={form.id} onChange={(e)=>onChange(e)} />
                <label htmlFor="pw">Password</label>
                <input type="password" name="pw" id="pw" value={form.pw} onChange={(e)=>onChange(e)} />
                <button type="submit">로그인</button>
            </form>
            <Link to={'/signUp'}>회원가입</Link>
            <Link to={'/find'}>계정찾기</Link>
        </section>
    )
}

export default Login;