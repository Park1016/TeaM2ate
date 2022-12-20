import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Search from 'components/Search/Search';
import Type from 'components/Type/Type';
import makeFormData from 'hooks/makeFormData';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Write = (props) => {

    const navigate = useNavigate();

    const [form, setForm] = useState({ title: '', text: '', tag: [], type: []});
    const [tag, setTag] = useState(null);

    const {isLoading, error, data} = useQuery(['tag'], async() => {
        const res = await axios.get('/tags/tag.json');
        return res.data.tag;
    })

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const onSubmit = async(e) => {
        e.preventDefault();
        console.log(tag);
    }


    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>error!</p>}
            {data &&
            <section>
                <form onSubmit={(e)=>onSubmit(e)}>
                    <label htmlFor="title">제목</label>
                    <input type="text" name="title" id="title" value={form.title} onChange={(e)=>onChange(e)} />
                    <label htmlFor="text">내용</label>
                    <input type="text" name="text" id="text" value={form.text} onChange={(e)=>onChange(e)} />
                    <p>태그</p>
                    <Search data={data} tag={tag} setTag={setTag}/>
                    <p>유형</p>
                    <Type />
                    <button type="submit">작성하기</button>
                </form>
            </section>}
        </>
    )
}

export default Write;