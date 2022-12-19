import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {

    const [form, setForm] = useState({ id: '', pw: '' });

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form);
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