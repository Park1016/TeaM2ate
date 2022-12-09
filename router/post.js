import express from 'express';
import 'express-async-errors';
import { body, param, query } from 'express-validator';
import { validate } from '../middleware/validation.js';
import * as postController from '../controller/post.js';

const router = express.Router();

//Get /post/:id
//Get /post?username=:username
//Post /post/write
//Put /post/update/:id
//Delete /post/delete/:id

router.get(
    '/', 
    [
        query('username').notEmpty().withMessage('닉네임을 입력해주세요'),
        validate
    ],
    postController.getByUsername
);

router.get(
    '/:id', 
    [
        param('id').isLength({ min: 2 }).withMessage('게시글 아이디를 입력해주세요'),
        validate
    ],
    postController.getById
);

router.post(
    '/write', 
    [
        body('table').notEmpty().withMessage('게시판 유형을 입력해주세요'),
        body('text').notEmpty().withMessage('게시글을 작성해주세요'),
        body('name').notEmpty().withMessage('이름을 입력해주세요'),
        body('username').notEmpty().withMessage('닉네임을 입력해주세요'),
        validate
    ],
    postController.write
);

router.put(
    '/update/:id', 
    [
        param('id').isLength({ min: 3 }).withMessage('게시글 아이디를 입력해주세요'),
        body('text').notEmpty().withMessage('게시글을 작성해주세요'),
        validate
    ],
    postController.update
);

router.delete(
    '/delete/:id', 
    [
        param('id').isLength({ min: 3 }).withMessage('게시글 아이디를 입력해주세요'),
        validate
    ],
    postController.remove
)

export default router;