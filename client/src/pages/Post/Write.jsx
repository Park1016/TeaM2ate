import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LocalContext } from 'context/localContext';
import makeFormData from 'hooks/makeFormData';
import Type from 'components/Type/Type';
import Search from 'components/Search/Search';
import PlusBtn from 'components/Common/PlusBtn/PlusBtn';
import AddBox from 'components/Common/AddBox/AddBox';
import ChooseBox from 'components/Common/ChooseBox/ChooseBox';
import PostApi from 'api/post';

const Write = (props) => {

    const navigate = useNavigate();

    const { tag, progress } = useContext(LocalContext);

    const [form, setForm] = useState({ title: '', text: '', tag: [], type: [], progress: 'ing'});
    const [show, setShow] = useState(false);

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const nullCheck = () => {
        if(form.title.length === 0) {
            alert('제목을 입력해주세요');
            return true;
        } else if(form.text.length === 0) {
            alert('내용을 입력해주세요');
            return true;
        } else if(form.type.length === 0) {
            alert('모집 유형을 선택해주세요');
            return true;
        }
    }

    const onSubmit = async(e) => {
        e.preventDefault();

        if(nullCheck()) {
            return;
        }

        const title = form.title;
        const text = form.text;
        const tag = form.tag;
        const type = form.type;
        const progress = form.progress;
        const formData = makeFormData({title, text, tag, type, progress});
        
        await new PostApi().writePost(formData);
    }


    return (
        <>
            {tag &&
            <section>
                <form onSubmit={(e)=>onSubmit(e)}>
                    <label htmlFor="title">제목</label>
                    <input type="text" name="title" id="title" value={form.title} onChange={(e)=>onChange(e)} />
                    <label htmlFor="text">내용</label>
                    <input type="text" name="text" id="text" value={form.text} onChange={(e)=>onChange(e)} />
                    <p>태그</p>
                    <Search
                        data={tag}
                        form={form}
                        setForm={setForm}
                    />
                    <p>유형</p>
                    <PlusBtn setShow={setShow}/>
                    {show &&
                    <Type
                        form={form}
                        setForm={setForm}
                        setShow={setShow}
                    />}
                    {form.type.length !== 0 && 
                    <AddBox
                        form={form}
                        setForm={setForm}
                        type={form.type}
                    />}
                    <p>진행 상황</p>
                    <ChooseBox
                        form={form}
                        setForm={setForm}
                        data={progress}
                    />
                    <button type="submit">작성하기</button>
                </form>
            </section>}
        </>
    )
}

export default Write;