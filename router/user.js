import express from 'express';
import 'express-async-errors';
import { body, param } from 'express-validator';
import { isAuth } from '../middleware/auth.js';
import { validate } from '../middleware/validation.js';
import * as userController from '../controller/user.js';

const router = express.Router();

//Get /post/:id
//Get /post?username=:username
//Post /post/write
//Put /post/update/:id
//Delete /post/delete/:id


const validateLogin = [
    body('username')
        .trim()
        .notEmpty()
        .withMessage('닉네임을 입력해주세요'),
    body('password')
        .trim()
        .isLength({ min: 5 })
        .withMessage('비밀번호를 입력해주세요'),
    validate,
];
    
const validateSignup = [
    ...validateLogin,
    body('name').notEmpty().withMessage('이름을 입력해주세요'),
    body('email').isEmail().normalizeEmail().withMessage('이메일을 형식에 맞게 입력해주세요'),
    body('url')
        .isURL()
        .withMessage('URL형식에 맞게 입력해주세요')
        // url은 옵션으로 값이 아예없거나(nullable), 텅텅빈 문자열(checkFalsy)이어도 받아줌
        .optional({ nullable: true, checkFalsy: true }),
    validate,
];

router.get('/me', isAuth, userController.me);

router.post('/signup', validateSignup, userController.signup);

router.post('/login', validateLogin, userController.login);

router.put(
    '/update/:id', 
    [
        isAuth,
        param('id').isLength({ min : 2 }).withMessage('유저 고유아이디를 입력해주세요'),
        body('username').notEmpty().withMessage('닉네임을 입력해주세요'),
        body('password').notEmpty().withMessage('비밀번호를 입력해주세요'),
        body('email').isEmail().withMessage('이메일을 형식에 맞게 입력해주세요').normalizeEmail(),
        validate
    ],
    userController.update
);

router.delete(
    '/delete/:id', 
    [
        isAuth,
        param('id').isLength({ min: 3 }).withMessage('유저 고유아이디를 입력해주세요'),
        validate
    ],
    userController.remove
)

export default router;