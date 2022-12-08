import express from 'express';
import 'express-async-errors';

let board = [
    {
        table: 'findTeam',  // 팀 찾기 게시판
        id: '123',  // 팀원찾기글 아이디
        text: '123글입니다',  // 팀원찾기글 텍스트
        createdAt: 'Date', // 팀원찾기글 생성 날짜
        name: '123name',  // 사용자 이름
        username: '123username',  // 사용자 닉네임 (아이디),
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
        name: '456name',  // 사용자 이름
        username: '456username',  // 사용자 닉네임 (아이디),
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
        name: '789name',  // 사용자 이름
        username: '789username',  // 사용자 닉네임 (아이디),
        view: 22,  // 조회수
        type: 'designer',  // 팀원찾기 유형(프론트엔드, 백엔드, 디자이너 등)
        lang: [],  // 사용언어 유형(node.js, react 등)
        url: '' // 사용자 프로파일 사진 URL
    }
]

export async function getByUsername(username) {
    return board.filter((x) => x.username === username);
}

export async function getById(id) {
    return board.filter((x) => x.id === id);
}

export async function create(table, text, name, username, lang, url) {
    const post = {
        table,
        id: "111",
        text,
        name,
        username,
        type: "gen",
        lang,
        url
    }
    board = [post, ...board];
    return post;
}

export async function update(id, table, text, lang) {
    const post = board.find((x) => x.id === id);
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