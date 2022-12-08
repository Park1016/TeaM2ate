import express from 'express';
import 'express-async-errors';

const board = [
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
]


const router = express.Router();

//Get /board
//Get /board/table/start/amount
router.get('/', (req, res, next) => {
    const data = board.filter((x) => x.table === 'findTeam');
    res.status(200).json(data); 
});
router.get('/:table/:start/:amount', (req, res, next) => {
    const table = req.params.table;
    const start = parseInt(req.params.start);
    const amount = parseInt(req.params.amount);
    const data = board.filter((x) => x.table === table).slice(start, start+amount);

    res.status(200).json(data); 
});

export default router;