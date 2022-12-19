import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Find(props) {
    const [email, setEmail] = useState('');

    const onChange = (value) => {
        setEmail(value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <section>
            <form onSubmit={(e)=>onSubmit(e)}>
                <label htmlFor="email">이메일</label>
                <input type="email" name="email" id="email" value={email} onChange={(e)=>onChange(e.target.value)} />
                <button type="submit">계정찾기</button>
            </form>
            <Link to={'/login'}>취소</Link>
        </section>
    )
}

export default Find;