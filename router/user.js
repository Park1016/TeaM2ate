import express from 'express';
import 'express-async-errors';
import { body, param } from 'express-validator';
import { validate } from '../middleware/validation.js';
import * as userController from '../controller/user.js';

const router = express.Router();

//Get /post/:id
//Get /post?username=:username
//Post /post/write
//Put /post/update/:id
//Delete /post/delete/:id

router.get(
    '/bookmark/:username', 
    [
        param('username').isLength({ min : 2 }).withMessage('닉네임을 입력해주세요'),
        validate
    ],
    userController.getBookmarkByUsername
);

router.get(
    '/post/:username', 
    [
        param('username').isLength({ min : 2 }).withMessage('닉네임을 입력해주세요'),
        validate
    ],
    userController.getPostByUsername
);

router.get(
    '/comment/:username', 
    [
        param('username').isLength({ min : 2 }).withMessage('닉네임을 입력해주세요'),
        validate
    ],
    userController.getCommentByUsername
);

router.post(
    '/signup', 
    [
        body('name').notEmpty().withMessage('이름을 입력해주세요'),
        body('username').notEmpty().withMessage('닉네임을 입력해주세요'),
        body('password').notEmpty().withMessage('비밀번호를 입력해주세요'),
        body('email').isEmail().withMessage('이메일을 형식에 맞게 입력해주세요').normalizeEmail(),
        validate
    ],
    userController.signup
);

router.post(
    '/login', 
    [
        body('username').notEmpty().withMessage('닉네임을 입력해주세요'),
        body('password').notEmpty().withMessage('비밀번호를 입력해주세요'),
        validate
    ],
    userController.login
);

router.put(
    '/update/:id', 
    [
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
        param('id').isLength({ min: 3 }).withMessage('유저 고유아이디를 입력해주세요'),
        validate
    ],
    userController.remove
)

export default router;