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


const router = express.Router();

//Get /post/:id
//Get /post?username=:username
//Post /post/write
//Put /post/update/:id
//Delete /post/delete/:id

router.get('/', (req, res, next) => {
    const username = req.query.username;
    const data = board.filter((x) => x.username === username);
    res.status(200).json(data); 
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const data = board.filter((x) => x.id === id);
    res.status(200).json(data); 
});

router.post('/write',(req, res, next) => {
    const {table, text, name, username, lang, url} = req.body;
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
    res.status(201).json(post);
});

router.put('/update/:id',(req, res, next) => {
    const id = req.params.id;
    const {table, text, lang} = req.body;
    const post = board.find((x) => x.id === id);
    if(post) {
        post.table = table;
        post.text = text;
        post.lang = lang;
        res.status(200).json(post);
    } else {
        res.status(404).json({ message: `Post id(${id} not found)`});
    }
});

router.delete('/delete/:id', (req, res, next) => {
    const id = req.params.id;
    board = board.filter((x) => x.id !== id);
    res.sendStatus(204);
})

export default router;