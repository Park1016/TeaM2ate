import express from 'express';
import 'express-async-errors';
import * as userRepository from './user.js';

let board = [
    {
        table: 'findTeam',  // 팀 찾기 게시판
        id: '123',  // 팀원찾기글 아이디
        text: '123글입니다',  // 팀원찾기글 텍스트
        createdAt: 'Date', // 팀원찾기글 생성 날짜
        userId: '123',
        view: 17,  // 조회수
        type: 'frontend',  // 팀원찾기 유형(프론트엔드, 백엔드, 디자이너 등)
        lang: ['react', 'redux'],  // 사용언어 유형(node.js, react 등)
        url: '' // 사용자 프로파일 사진 URL
    },
    {
        table: 'findTeam',  // 팀 찾기 게시판
        id: '456',  // 팀원찾기글 아이디
        text: '456글입니다',  // 팀원찾기글 텍스트
        createdAt: 'Date', // 팀원찾기글 생성 날짜
        userId: '456',
        view: 27,  // 조회수
        type: 'backend',  // 팀원찾기 유형(프론트엔드, 백엔드, 디자이너 등)
        lang: ['node.js', 'nest'],  // 사용언어 유형(node.js, react 등)
        url: '' // 사용자 프로파일 사진 URL
    },
    {
        table: 'findTeam',  // 팀 찾기 게시판
        id: '789',  // 팀원찾기글 아이디
        text: '789글입니다',  // 팀원찾기글 텍스트
        createdAt: 'Date', // 팀원찾기글 생성 날짜
        userId: '789',
        view: 22,  // 조회수
        type: 'designer',  // 팀원찾기 유형(프론트엔드, 백엔드, 디자이너 등)
        lang: [],  // 사용언어 유형(node.js, react 등)
        url: '' // 사용자 프로파일 사진 URL
    }
]

export async function getUser() {
    return Promise.all(
        board.map(async(post)=>{
            const {username, name} = await userRepository.findById(post.userId);
            return { ...post, username, name };
        })
    );
};

export async function getByUsername(username) {
    return getUser().then((post)=>post.filter((x)=>x.username === username));
}

export async function getById(id) {
    const found = board.find((post) => post.id === id);
    if (!found) {
        return null;
    }
    const { username, name } = await userRepository.findById(found.userId);
    return { ...found, username, name };
}

export async function create(table, text, userId, lang, url) {
    const post = {
        table,
        text,
        userId,
        lang,
        url,
        id: "111",
        type: "gen"
    }
    board = [post, ...board];

    return getById(post.id);
}

export async function update(id, table, text, lang) {
    const post = await getById(id);
    if(post) {
        post.table = table;
        post.text = text;
        post.lang = lang;
    }
    return post;
}

export async function remove(id) {
    board = board.filter((x) => x.id !== id);
}