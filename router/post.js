import express from 'express';
import 'express-async-errors';
import * as postController from '../controller/post.js';

const router = express.Router();

//Get /post/:id
//Get /post?username=:username
//Post /post/write
//Put /post/update/:id
//Delete /post/delete/:id

router.get('/', postController.getByUsername);

router.get('/:id', postController.getById);

router.post('/write', postController.write);

router.put('/update/:id', postController.update);

router.delete('/delete/:id', postController.remove)

export default router;