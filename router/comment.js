import express from 'express';
import 'express-async-errors';
import * as commentController from '../controller/comment.js';

const router = express.Router();

//Get /comment/:postId
//Get /comment?username=:username
//Post /comment/write
//Put /comment/update/:id
//Delete /comment/delete/:id

router.get('/', commentController.getByUsername);

router.get('/:postId', commentController.getByPostId);

router.post('/write', commentController.write);

router.put('/update/:id', commentController.update);

router.delete('/delete/:id', commentController.remove);

export default router;