import * as boardRepository from '../data/board.js';

export async function getBoard(req, res) {
    const data = await boardRepository.getBoard();
    res.status(200).json(data); 
};

export async function getBoardByAmount(req, res) {
    const table = req.params.table;
    const start = parseInt(req.params.start);
    const amount = parseInt(req.params.amount);
    const data = await boardRepository.getBoardByAmount(table, start, amount);
    console.log(data, start, amount);
    res.status(200).json(data); 
};