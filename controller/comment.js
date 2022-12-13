import * as commentRepository from '../data/comment.js';

export async function getByUsername(req, res) {
    const username = req.query.username;
    const data = await commentRepository.getByUsername(username);
    res.status(200).json(data); 
}

export async function getByPostId(req, res) {
    const postId = req.params.postId;
    const data = await commentRepository.getByPostId(postId);
    res.status(200).json(data); 
}

export async function write(req, res) {
    const {postId, text, url} = req.body;
    const comment = await commentRepository.create(postId, text, req.userId, url);
    res.status(201).json(comment);
}

export async function update(req, res) {
    const id = req.params.id;
    const {text} = req.body;

    const comment = await commentRepository.getById(id);
    if(!comment) {
        return res.sendStatus(404);
    }
    if(comment.userId !== req.userId) {
        return res.sendStatus(403);
    }

    const updated = await commentRepository.update(id, text);
    res.status(200).json(updated);
}

export async function remove(req, res) {
    const id = req.params.id;

    const comment = await commentRepository.getById(id);
    if(!comment) {
        return sendStatus(404);
    }
    if(comment.id !== req.id) {
        return sendStatus(403);
    }

    await commentRepository.remove(id);
    res.sendStatus(204);
}