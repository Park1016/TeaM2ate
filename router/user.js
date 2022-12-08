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


const router = express.Router();

//Get /post/:id
//Get /post?username=:username
//Post /post/write
//Put /post/update/:id
//Delete /post/delete/:id

router.get('/bookmark/:username', (req, res, next) => {
    const username = req.params.username;
    const user = users.filter((x) => x.username === username);
    const data = user[0].bookmark;
    res.status(200).json(data); 
});

router.get('/post/:username', (req, res, next) => {
    const username = req.params.username;
    const user = users.filter((x) => x.username === username);
    const data = user[0].post;
    res.status(200).json(data); 
});

router.get('/comment/:username', (req, res, next) => {
    const username = req.params.username;
    const user = users.filter((x) => x.username === username);
    const data = user[0].comment;
    res.status(200).json(data); 
});

router.post('/signup',(req, res, next) => {
    const {name, username, password, email, url} = req.body;
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
    res.status(201).json(user);
});

router.post('/login',(req, res, next) => {
    const {username, password} = req.body;
    const user = users.find((x) => x.username === username);
    if(user) {
        if(user.password === password) {
            res.status(201).json(user);
        } else {
            res.status(404).json({ message: `Incorrect password`});
        }
    } else {
        res.status(404).json({ message: `Username(${username}) not found)`});
    }
});

router.put('/update/:id',(req, res, next) => {
    const id = req.params.id;
    const {username, password, email, url} = req.body;
    const user = users.find((x) => x.id === id);
    if(user) {
        user.username = username;
        user.password = password;
        user.email = email;
        user.url = url;
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: `User id(${id} not found)`});
    }
});

router.delete('/delete/:id', (req, res, next) => {
    const id = req.params.id;
    users = users.filter((x) => x.id !== id);
    res.sendStatus(204);
})

export default router;