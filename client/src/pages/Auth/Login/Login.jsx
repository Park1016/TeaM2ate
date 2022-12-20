import User from 'api/user';
import axios from 'axios';
import makeFormData from 'hooks/makeFormData';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {

    const navigate = useNavigate();
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

        const res = await new User().login(formData);
        localStorage.setItem('token', res.token);
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