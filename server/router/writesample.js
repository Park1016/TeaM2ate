import express from "express";
import "express-async-errors";
import * as writesampleRepository from "../controller/writesample.js";

const router = express.Router();

router.get("/", writesampleRepository.getSample);

router.post("/write", writesampleRepository.create);

router.post("/update", writesampleRepository.update);

export default router;
