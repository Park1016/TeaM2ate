import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as userRepository from "../data/user.js";
import { config } from "../config.js";
// import { v4 } from 'uuid';

export async function me(req, res) {
  const user = await userRepository.getById(req.userId);
  if (!user) {
    return res.status(404).json({ message: "사용자를 찾을 수 없습니다" });
  }
  res.status(200).json(user);
}

export async function update(req, res) {
  const id = req.params.id;
  const { username, password, url } = req.body;
  const user = await userRepository.update(id, username, password, url);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: `User id(${id} not found)` });
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
  const userId = await userRepository.signUp({
    name,
    username,
    password: hashed,
    email,
    url,
  });
  // const accessToken = createAccessJwtToken(userId);
  // const refreshToken = createRefreshJwtToken(userId);
  res.status(201).json({ username });
}

export async function login(req, res) {
  const { username, password } = req.body;
  const user = await userRepository.findByUsername(username);
  if (!user) {
    return res
      .status(401)
      .json({ message: "잘못된 사용자 또는 비밀번호입니다" });
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res
      .status(401)
      .json({ message: "잘못된 사용자 또는 비밀번호입니다" });
  }
  const id = user.id;
  const accessToken = createAccessJwtToken(id);
  const refreshToken = createRefreshJwtToken(id);
  setAccessToken(res, accessToken);
  setRefreshToken(res, refreshToken);
  res.status(201).json({ id });
}

export async function logout(req, res) {
  res.cookie("accessToken", "");
  res.cookie("refreshToken", "");
  res.status(200).json({ message: "로그아웃됐습니다" });
}

export async function csrfToken(req, res) {
  const csrfToken = await generateCSRFToken();
  res.status(200).json({ csrfToken });
}

export function createAccessJwtToken(id) {
  return jwt.sign({ id }, config.jwt.secretKey, {
    expiresIn: config.jwt.expiresInSecAccess,
  });
}

function createRefreshJwtToken(id) {
  return jwt.sign({ id }, config.jwt.secretKey, {
    expiresIn: config.jwt.expiresInSecRefresh,
  });
}

const options = {
  httpOnly: true,
  sameSite: "none",
  secure: true,
};
export function setAccessToken(res, accessToken) {
  res.cookie("accessToken", accessToken, {
    ...options,
    maxAge: config.jwt.expiresInSecAccess * 1000,
  });
}

function setRefreshToken(res, refreshToken) {
  res.cookie("refreshToken", refreshToken, {
    ...options,
    maxAge: config.jwt.expiresInSecRefresh * 1000,
  });
}

function generateCSRFToken() {
  return bcrypt.hash(config.csrf.plainToken, 1);
}
