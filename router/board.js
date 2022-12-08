import express from 'express';
import 'express-async-errors';
import * as boardController from '../controller/board.js';

const router = express.Router();

//Get /board
//Get /board/table/start/amount
router.get('/', boardController.getBoard);
router.get('/:table/:start/:amount', boardController.getBoardByAmount);

export default router;