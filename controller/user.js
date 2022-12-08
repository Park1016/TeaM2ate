import * as userRepository from '../data/user.js';

export async function getBookmarkByUsername(req, res) {
    const username = req.params.username;
    const data = await userRepository.getBookmarkByUsername(username);
    res.status(200).json(data); 
}

export async function getPostByUsername(req, res) {
    const username = req.params.username;
    const data = await userRepository.getPostByUsername(username);
    res.status(200).json(data);  
}

export async function getCommentByUsername(req, res) {
    const username = req.params.username;
    const data = await userRepository.getCommentByUsername(username);
    res.status(200).json(data); 
}

export async function signup(req, res) {
    const {name, username, password, email, url} = req.body;
    const data = await userRepository.signup(name, username, password, email, url);
    res.status(201).json(data);
}

export async function login(req, res) {
    const {username, password} = req.body;
    const user = await userRepository.login(username);
    if(user) {
        if(user.password === password) {
            res.status(201).json(user);
        } else {
            res.status(404).json({ message: `Incorrect password`});
        }
    } else {
        res.status(404).json({ message: `Username(${username}) not found)`});
    }
}

export async function update(req, res) {
    const id = req.params.id;
    const {username, password, email, url} = req.body;
    const user = await userRepository.update(id, username, password, email, url);
    if(user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: `User id(${id} not found)`});
    }
}

export async function remove(req, res) {
    const id = req.params.id;
    await userRepository.remove(id);
    res.sendStatus(204);
}