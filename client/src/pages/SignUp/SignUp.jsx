import axios from 'axios';
import makeFormData from 'hooks/makeFormData';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserApi from 'api/user';
import { AuthContext } from 'context/authContext';
import { HttpContext } from 'context/httpContext';

function SignUp(props) {
    const navigate = useNavigate();
    // const { setAuth } = useContext(AuthContext);
    const [form, setForm] = useState({ name: '', username: '', password: '', email: '', url: ''});

    const { http } = useContext(HttpContext);

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const onPhoto = (e) => {
        const image = e.target.files[0];
        setForm({ ...form, [e.target.name]: image});
    }

    const onSubmitPhoto = async() => {

        const formData = new FormData();
        formData.append('url', form.url);
        const res = await new UserApi(http).photo(formData);
        console.log(res);
    }

    const onSubmit = async(e) => {
        e.preventDefault();

        if(form.url) {
            await onSubmitPhoto();
        }

        const name = form.name;
        const username = form.username;
        const password = form.password;
        const email = form.email;
        const url = form.url;

        const formData = makeFormData({name, username, password, email, url});

        const res = await new UserApi(http).signup(formData);
        // setAuth(res.token);
        // localStorage.setItem('token', res.token);
        setForm({ name: '', username: '', password: '', email: '', url: ''});
        navigate('/login');
    };

    return (
        <section>
            <form onSubmit={(e)=>onSubmit(e)} encType="multipart/form-data" method="post">
                <label htmlFor="name">이름</label>
                <input type="text" name="name" id="name" value={form.name} onChange={(e)=>onChange(e)} />
                <label htmlFor="username">아이디</label>
                <input type="text" name="username" id="username" value={form.username} onChange={(e)=>onChange(e)} />
                <label htmlFor="password">비밀번호</label>
                <input type="password" name="password" id="password" value={form.password} onChange={(e)=>onChange(e)} />
                <label htmlFor="email">이메일</label>
                <input type="text" name="email" id="email" value={form.email} onChange={(e)=>onChange(e)} />
                <label htmlFor="url">프로필 사진</label>
                <input type="file" name="url" id="url" accept="imgae/*" onChange={(e)=>onPhoto(e)}/>
                <button type="submit">회원가입</button>
            </form>
            <Link to={'/login'}>로그인</Link>
        </section>
    )
}

export default SignUp;