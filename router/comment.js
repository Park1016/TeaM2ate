import express from 'express';
import 'express-async-errors';

let comments = [
    {
        postId: '123',  // 팀원찾기글 아이디
        id: '123123',  // 댓글 아이디
        text: '123comment',  // 댓글 텍스트
        createdAt: 'Date', // 댓글 생성 날짜
        name: '123name',  // 사용자 이름
        username: '123username',  // 사용자 닉네임 (아이디)
        url: '' // 사용자 프로파일 사진 URL
    },
    {
        postId: '123',  // 팀원찾기글 아이디
        id: '123-2',  // 댓글 아이디
        text: '123-2comment',  // 댓글 텍스트
        createdAt: 'Date', // 댓글 생성 날짜
        name: '123-2name',  // 사용자 이름
        username: '123-2username',  // 사용자 닉네임 (아이디)
        url: '' // 사용자 프로파일 사진 URL
    },
    {
        postId: '456',  // 팀원찾기글 아이디
        id: '456456',  // 댓글 아이디
        text: '456comment',  // 댓글 텍스트
        createdAt: 'Date', // 댓글 생성 날짜
        name: '456name',  // 사용자 이름
        username: '456username',  // 사용자 닉네임 (아이디)
        url: '' // 사용자 프로파일 사진 URL
    },
    {
        postId: '789',  // 팀원찾기글 아이디
        id: '789789',  // 댓글 아이디
        text: '789comment',  // 댓글 텍스트
        createdAt: 'Date', // 댓글 생성 날짜
        name: '789name',  // 사용자 이름
        username: '789username',  // 사용자 닉네임 (아이디)
        url: '' // 사용자 프로파일 사진 URL
    }
]

const router = express.Router();

//Get /comment/:postId
//Get /comment?username=:username
//Post /comment/write
//Put /comment/update/:id
//Delete /comment/delete/:id

router.get('/', (req, res, next) => {
    const username = req.query.username;
    const data = comments.filter((x) => x.username === username);
    res.status(200).json(data); 
});

router.get('/:postId', (req, res, next) => {
    const postId = req.params.postId;
    const data = comments.filter((x) => x.postId === postId);
    res.status(200).json(data); 
});

router.post('/write',(req, res, next) => {
    const {postId, text, name, username, url} = req.body;
    const comment = {
        postId,
        id: '777777',
        text,
        name,
        username,
        url
    }
    comments = [comment, ...comments];
    res.status(201).json(comment);
});

router.put('/update/:id',(req, res, next) => {
    const id = req.params.id;
    const {text} = req.body;
    const comment = comments.find((x) => x.id === id);
    if(comment) {
        comment.text = text;
        res.status(200).json(comment);
    } else {
        res.status(404).json({ message: `Comment id(${id} not found)`});
    }
});

router.delete('/delete/:id', (req, res, next) => {
    const id = req.params.id;
    comments = comments.filter((x) => x.id !== id);
    res.sendStatus(204);
})

export default router;