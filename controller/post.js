import * as postRepository from '../data/post.js';

export async function getByUsername(req, res) {
    const username = req.query.username;
    const data = await postRepository.getByUsername(username);
    res.status(200).json(data); 
}

export async function getById(req, res) {
    const id = req.params.id;
    const data = await postRepository.getById(id);
    res.status(200).json(data);  
}

export async function write(req, res) {
    const {table, text, name, username, lang, url} = req.body;
    const post = await postRepository.create(table, text, name, username, lang, url);
    res.status(201).json(post);
}

export async function update(req, res) {
    const id = req.params.id;
    const {table, text, lang} = req.body;
    const post = await postRepository.update(id, table, text, lang);
    if(post) {
        res.status(200).json(post);
    } else {
        res.status(404).json({ message: `Post id(${id} not found)`});
    }
}

export async function remove(req, res) {
    const id = req.params.id;
    await postRepository.remove(id);
    res.sendStatus(204);
}