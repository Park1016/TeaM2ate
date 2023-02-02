import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import multer from "multer";
import hpp from "hpp";
import path from "path";
import "express-async-errors";
import boardRouter from "./router/board.js";
import postRouter from "./router/post.js";
import commentRouter from "./router/comment.js";
import userRouter from "./router/user.js";
import replycommRouter from "./router/replycomm.js";
import writesampleRouter from "./router/writesample.js";
import { config } from "./config.js";
import { csrfCheck } from "./middleware/csrf.js";

const app = express();
const upload = multer();
const __dirname = path.resolve();

const corsOption = {
  // origin: (origin, callback) => {
  //   callback(null, true);
  // },
  // origin: config.cors.allowedOrigin,
  origin: true,
  optionsSuccessStatus: 200,
  methods: "GET, POST, OPTIONS, PUT, DELETE",
  credentials: true,
};

app.use(hpp());
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(cors(corsOption));
app.use(morgan("tiny"));
app.use(upload.array());

app.use(express.static(path.join(__dirname, "../client/build")));

app.use(csrfCheck);
app.use("/board", boardRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);
app.use("/user", userRouter);
app.use("/replycomm", replycommRouter);
app.use("/writesample", writesampleRouter);

// 지원하지 않는 api
app.use((req, res, next) => {
  res.sendStatus(404);
});

// 에러처리
app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

// db.getConnection().then((connection)=>console.log(connection));
app.listen(config.host.port);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
