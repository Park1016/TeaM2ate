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
    const {postId, text, name, username, url} = req.body;
    const comment = await commentRepository.create(postId, text, name, username, url);
    res.status(201).json(comment);
}

export async function update(req, res) {
    const id = req.params.id;
    const {text} = req.body;
    const comment = await commentRepository.update(id, text);
    if(comment) {
        res.status(200).json(comment);
    } else {
        res.status(404).json({ message: `Comment id(${id} not found)`});
    }
}

export async function remove(req, res) {
    const id = req.params.id;
    await commentRepository.remove(id);
    res.sendStatus(204);
}