import express from 'express';
import 'express-async-errors';
import { body, param, query } from 'express-validator';
import { validate } from '../middleware/validation.js';
import * as commentController from '../controller/comment.js';

const router = express.Router();

//Get /comment/:postId
//Get /comment?username=:username
//Post /comment/write
//Put /comment/update/:id
//Delete /comment/delete/:id

router.get(
    '/',
    [
        query('username').notEmpty().withMessage('닉네임을 입력하세요'),
        validate
    ],
    commentController.getByUsername
);

router.get(
    '/:postId', 
    [
        param('postId').trim().isLength({ min: 2 }).withMessage('게시판 아이디를 입력해주세요'),
        validate
    ],
    commentController.getByPostId
);

router.post(
    '/write',
    [
        body('postId').notEmpty().withMessage('게시글 아이디를 입력해주세요'),
        body('text').notEmpty().withMessage('게시글을 작성해주세요'),
        body('name').notEmpty().withMessage('이름을 입력해주세요'),
        body('username').notEmpty().withMessage('닉네임을 입력해주세요'),
        validate
    ],
    commentController.write
);

router.put(
    '/update/:id',
    [
        param('id').isLength({ min: 3 }).withMessage('댓글 아이디를 입력해주세요'),
        body('text').notEmpty().withMessage('댓글을 작성해주세요'),
        validate
    ],
    commentController.update
);

router.delete(
    '/delete/:id', 
    [
        param('id').isLength({ min: 3 }).withMessage('댓글 아이디를 입력해주세요'),
        validate
    ],
    commentController.remove
);

export default router;