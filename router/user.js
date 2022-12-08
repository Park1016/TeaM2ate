import express from 'express';
import 'express-async-errors';
import * as userController from '../controller/user.js';

const router = express.Router();

//Get /post/:id
//Get /post?username=:username
//Post /post/write
//Put /post/update/:id
//Delete /post/delete/:id

router.get('/bookmark/:username', userController.getBookmarkByUsername);

router.get('/post/:username', userController.getPostByUsername);

router.get('/comment/:username', userController.getCommentByUsername);

router.post('/signup', userController.signup);

router.post('/login', userController.login);

router.put('/update/:id', userController.update);

router.delete('/delete/:id', userController.remove)

export default router;