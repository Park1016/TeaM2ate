import express from 'express';
import 'express-async-errors';

let users = [
    {
        id: '123',  // 사용자의 고유한 아이디
        name: '123name',  // 사용자 이름
        username: '123username',  // 사용자 닉네임 (아이디),
        password: '123123',  // 비밀번호
        email: '123@gmail.com',  // 이메일
        url: '', // 사용자 프로파일 사진 URL
        bookmark: ['123'],  // 찜한 게시글
        post: ['123'],  // 내가 쓴 게시글
        comment: ['123'], // 내가 쓴 댓글
        type: 'gen'  // 유저 유형(일반, 관리자)
    },
    {
        id: '456',  // 사용자의 고유한 아이디
        name: '456name',  // 사용자 이름
        username: '456username',  // 사용자 닉네임 (아이디),
        password: '456',  // 비밀번호
        email: '456@gmail.com',  // 이메일
        url: '', // 사용자 프로파일 사진 URL
        bookmark: ['456'],  // 찜한 게시글
        post: ['456'],  // 내가 쓴 게시글
        comment: ['456'], // 내가 쓴 댓글
        type: 'gen'  // 유저 유형(일반, 관리자)
    },
    {
        id: '789',  // 사용자의 고유한 아이디
        name: '789name',  // 사용자 이름
        username: '789username',  // 사용자 닉네임 (아이디),
        password: '789',  // 비밀번호
        email: '789@gmail.com',  // 이메일
        url: '', // 사용자 프로파일 사진 URL
        bookmark: ['789'],  // 찜한 게시글
        post: ['789'],  // 내가 쓴 게시글
        comment: ['789'], // 내가 쓴 댓글
        type: 'gen'  // 유저 유형(일반, 관리자)
    }
];

export async function getBookmarkByUsername(username) {
    const user = users.find((x) => x.username === username);
    return user.bookmark;
}

export async function getPostByUsername(username) {
    const user = users.find((x) => x.username === username);
    return user.post;
}

export async function getCommentByUsername(username) {
    const user = users.find((x) => x.username === username);
    return user.comment;
}

export async function signup(name, username, password, email, url) {
    const user = {
        id: 'new',  // 사용자의 고유한 아이디
        name,  // 사용자 이름
        username,  // 사용자 닉네임 (아이디),
        password,  // 비밀번호
        email,  // 이메일
        url, // 사용자 프로파일 사진 URL
        bookmark: [],  // 찜한 게시글
        post: [],  // 내가 쓴 게시글
        comment: [],  // 내가 쓴 댓글
        type: 'gen'  // 유저 유형(일반, 관리자)
    }
    users = [user, ...users];
    return user;
}

export async function login(username) {
    return users.find((x) => x.username === username);
}

export async function update(id, username, password, email, url) {
    const user = users.find((x) => x.id === id);
    if(user) {
        user.username = username;
        user.password = password;
        user.email = email;
        user.url = url;
    }
    return user;
}

export async function remove(id) {
    users = users.filter((x) => x.id !== id);
}