import * as writesampleRepository from "../data/writesample.js";

export async function getSample(req, res) {
  const data = await writesampleRepository.getSample();
  res.status(200).json(data);
}

export async function create(req, res) {
  const { content } = req.body;
  const data = await writesampleRepository.create(content);
  res.status(200).json(data);
}

export async function update(req, res) {
  const { content } = req.body;

  const data = await writesampleRepository.update(content);
  res.status(200).json(data);
}
