import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import {
  progressState,
  tagSelector,
  numSelector,
  typeSelector,
} from "state/local";
import { httpSelector } from "state/http";
import PostApi from "api/post";
import { makeFormData } from "hooks/makeFormData";
import FrameType from "containers/FrameType/FrameType";
import Type from "containers/Type/Type";
import SelectTag from "components/SelectTag/SelectTag";
import PlusBtn from "components/PlusBtn/PlusBtn";
import ChooseBox from "components/ChooseBox/ChooseBox";
import Input from "components/Input/Input";
import Textarea from "components/Textarea/Textarea";

const FrameWrite = ({ form, setForm, editId }) => {
  const navigate = useNavigate();

  const t = useRecoilValue(typeSelector);
  const n = useRecoilValue(numSelector);
  const tag = useRecoilValue(tagSelector);
  const progress = useRecoilValue(progressState);
  const http = useRecoilValue(httpSelector);

  const [show, setShow] = useState(false);

  const nullCheck = () => {
    if (form.title.length === 0) {
      alert("제목을 입력해주세요");
      return true;
    } else if (form.text.length === 0) {
      alert("내용을 입력해주세요");
      return true;
    } else if (form.type.length === 0) {
      alert("모집 유형을 선택해주세요");
      return true;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (nullCheck()) {
      return;
    }

    const cate = "findTeam";
    const title = form.title;
    const text = form.text;
    const tag = JSON.stringify(form.tag);
    const type = JSON.stringify(form.type);
    const progress = form.progress;
    const formData = makeFormData({ cate, title, text, tag, type, progress });

    let res;
    if (editId) {
      res = await new PostApi(http).updatePost(formData, editId);
    } else {
      res = await new PostApi(http).writePost(formData);
    }

    navigate(`/post/${res.id}`);
  };

  return (
    <section>
      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="title">제목</label>
        <Input
          type={"text"}
          name={"title"}
          id={"title"}
          value={form.title}
          form={form}
          setForm={setForm}
        />
        <label htmlFor="text">내용</label>
        <Textarea
          name={"text"}
          id={"text"}
          value={form.text}
          form={form}
          setForm={setForm}
        />
        <article>
          <p>태그</p>
          <SelectTag data={tag} form={form} setForm={setForm} />
        </article>
        <article>
          <p>유형</p>
          <PlusBtn setShow={setShow} />
          {show && (
            <Type form={form} setForm={setForm} setShow={setShow} t={t} n={n} />
          )}
          {form.type.length !== 0 && (
            <FrameType type={form.type} form={form} setForm={setForm} />
          )}
        </article>
        {editId && (
          <article>
            <p>진행 상황</p>
            <ChooseBox form={form} setForm={setForm} data={progress} />
          </article>
        )}
        <button type="submit">작성하기</button>
      </form>
    </section>
  );
};

export default React.memo(FrameWrite);
