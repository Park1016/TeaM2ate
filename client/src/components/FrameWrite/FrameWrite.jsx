import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

import { progressState, tagSelector } from 'state/local';
import { HttpSelector } from 'state/http';
import PostApi from 'api/post';
import makeFormData from 'hooks/makeFormData';
import FrameType from 'components/FrameType/FrameType';
import Type from 'components/Type/Type';
import Search from 'components/Search/Search';
import PlusBtn from 'components/Common/PlusBtn/PlusBtn';
import ChooseBox from 'components/Common/ChooseBox/ChooseBox';


const FrameWrite = ({form, setForm, editId}) => {

    const navigate = useNavigate();
    
    const tag = useRecoilValue(tagSelector);
    const progress = useRecoilValue(progressState);
    const http = useRecoilValue(HttpSelector);

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

        const cate = 'findTeam';
        const title = form.title;
        const text = form.text;
        const tag = JSON.stringify(form.tag);
        const type = JSON.stringify(form.type);
        const progress = form.progress;
        const formData = makeFormData({cate, title, text, tag, type, progress});

        let res;
        if(editId) {
            res = await new PostApi(http).updatePost(formData, editId);
        } else {
            res = await new PostApi(http).writePost(formData);
        }

        navigate(`/post/${res.id}`);
    }


    return (
        <section>
            <form onSubmit={(e)=>onSubmit(e)}>
                <label htmlFor="title">제목</label>
                <input type="text" name="title" id="title" value={form.title} onChange={(e)=>onChange(e)} />
                <label htmlFor="text">내용</label>
                <input type="text" name="text" id="text" value={form.text} onChange={(e)=>onChange(e)} />
                <article>
                    <p>태그</p>
                    <Search
                        data={tag}
                        form={form}
                        setForm={setForm}
                    />
                </article>
                <article>
                    <p>유형</p>
                    <PlusBtn setShow={setShow}/>
                    {show &&
                    <Type
                        form={form}
                        setForm={setForm}
                        setShow={setShow}
                    />}
                    {form.type.length !== 0 && 
                    <FrameType
                        type={form.type}
                        form={form}
                        setForm={setForm}
                    />}
                </article>
                {editId && <article>
                    <p>진행 상황</p>
                    <ChooseBox
                        form={form}
                        setForm={setForm}
                        data={progress}
                    />
                </article>}
                <button type="submit">작성하기</button>
            </form>
        </section>
    )
}

export default FrameWrite;