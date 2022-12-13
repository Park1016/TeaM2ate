import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as userRepository from '../data/user.js';
import { config } from '../config.js';

export async function me(req, res) {
    const user = await userRepository.findById(req.userId);
    if (!user) {
        return res.status(404).json({ message: '사용자를 찾을 수 없습니다' });
    }
    res.status(200).json({ token: req.token, user });
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

export async function signup(req, res) {
    const { name, username, password, email, url } = req.body;
    // 사용자가 기존에 이미 있는지 없는지 확인
    const found = await userRepository.findByUsername(username);
    // 이미 있는 username이면 return
    if (found) {
        return res.status(409).json({ message: `${username} already exists` });
    }
    // 비밀번호 hashing해서 보안처리
    const hashed = await bcrypt.hash(password, config.bcrypt.saltRounds);
    // user 생성
    const userId = await userRepository.createUser({
        name,
        username,
        password: hashed,
        email,
        url,
    });
    const token = createJwtToken(userId);
    res.status(201).json({ token, username });
}

export async function login(req, res) {
    const { username, password } = req.body;
    const user = await userRepository.findByUsername(username);
    if (!user) {
        return res.status(401).json({ message: '잘못된 사용자 또는 비밀번호입니다' });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        return res.status(401).json({ message: '잘못된 사용자 또는 비밀번호입니다' });
    }
    const token = createJwtToken(user.id);
    res.status(200).json({ token, username });
}

function createJwtToken(id) {
    return jwt.sign({ id }, config.jwt.secretKey, { expiresIn: config.jwt.expiresInSec });
}
