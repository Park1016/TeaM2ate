import jwt from "jsonwebtoken";
import { config } from "../config.js";
import { createAccessJwtToken, setAccessToken } from "../controller/user.js";
import * as userRepository from "../data/user.js";

const AUTH_ERROR = { message: "유저 인증 오류" };

export const isAuth = async (req, res, next) => {
  let token;
  let refresh;
  const authHeader = req.get("Authorization");
  // header에 token있으면 그 token을 let token변수에 담음
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  }
  console.log("token!!! ---", token);
  // header에 token없으면 cookie에서 token값 가져와서 담음
  if (!token) {
    token = req.cookies["accessToken"];
  }
  // cookie에 accessToken없으면 refreshToken 가져옴
  if (!token) {
    refresh = req.cookies["refreshToken"];
  }
  console.log("refresh!!---", refresh);
  // refresh cookie도 없으면 에러던짐
  if (!token && refresh) {
    const { id } = jwt.decode(refresh);
    token = createAccessJwtToken(id);
    setAccessToken(res, token);
  } else if (!token && !refresh) {
    return res.status(202).json({ message: "유저 인증 오류1" });
  }

  jwt.verify(token, config.jwt.secretKey, async (error, decoded) => {
    console.log("token ---", token);
    if (error) {
      return res.status(401).json({ message: "유저 인증 오류2" });
    }
    const user = await userRepository.getById(decoded.id);
    console.log("user ---", user);
    if (!user) {
      return res.status(401).json({ message: "유저 인증 오류3" });
    }
    req.userId = user.id;
    req.username = user.username;
    req.url = user.url;
    next();
  });
};
