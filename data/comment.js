import express from 'express';
import 'express-async-errors';
import * as userRepository from './user.js';

let comments = [
    {
        postId: '123',  // 팀원찾기글 아이디
        id: '123123',  // 댓글 아이디
        text: '123comment',  // 댓글 텍스트
        createdAt: 'Date', // 댓글 생성 날짜
        userId: '123',
        url: '' // 사용자 프로파일 사진 URL
    },
    {
        postId: '123',  // 팀원찾기글 아이디
        id: '123-2',  // 댓글 아이디
        text: '123-2comment',  // 댓글 텍스트
        createdAt: 'Date', // 댓글 생성 날짜
        userId: '123',
        url: '' // 사용자 프로파일 사진 URL
    },
    {
        postId: '456',  // 팀원찾기글 아이디
        id: '456456',  // 댓글 아이디
        text: '456comment',  // 댓글 텍스트
        createdAt: 'Date', // 댓글 생성 날짜
        userId: '456',
        url: '' // 사용자 프로파일 사진 URL
    },
    {
        postId: '789',  // 팀원찾기글 아이디
        id: '789789',  // 댓글 아이디
        text: '789comment',  // 댓글 텍스트
        createdAt: 'Date', // 댓글 생성 날짜
        userId: '789',
        url: '' // 사용자 프로파일 사진 URL
    }
]

export async function getUser() {
    return Promise.all(
        comments.map(async(comment)=>{
            const {username, name} = await userRepository.findById(comment.userId);
            return { ...comment, username, name };
        })
    );
}

export async function getByUsername(username) {
    return getUser().then((comment)=>comment.filter((x)=>x.username === username));
}

export async function getByPostId(postId) {
    const found = comments.find((comment) => comment.postId === postId);
    if (!found) {
        return null;
    }
    const { username, name } = await userRepository.findById(found.userId);
    return { ...found, username, name };
}

export async function getById(id) {
    const found = comments.find((comment)=>comment.id === id);
    if(!found) {
        return null;
    }
    const { username, name } = await userRepository.findById(found.userId);
    return { ...found, username, name };
}

export async function create(postId, text, userId, url) {
    const comment = {
        postId,
        id: '777777',
        text,
        userId,
        url
    }
    comments = [comment, ...comments];
    return getByPostId(postId);
}

export async function update(id, text) {
    const comment = comments.find((x) => x.id === id);
    if(comment) {
        comment.text = text;
    }
    return comment;
}

export async function remove(id) {
    comments = comments.filter((x) => x.id !== id);
}