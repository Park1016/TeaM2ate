import * as replycommRepository from "../data/replycomm.js";
import * as userRepository from "../data/user.js";

export async function getByUsername(req, res) {
  const username = req.query.username;
  res.status(200).json(username);
}

export async function getPostByReply(req, res) {
  const username = req.params.username;
  const data = await replycommRepository.getPostByReply(username);
  res.status(200).json(data);
}

export async function getByCommentId(req, res) {
  const commentId = req.params.commentId;
  const data = await replycommRepository.getByCommentId(commentId);
  res.status(200).json(data);
}

export async function getByPostId(req, res) {
  const postId = req.params.postId;
  const data = await replycommRepository.getByPostId(postId);
  res.status(200).json(data);
}

export async function write(req, res) {
  const { postId, commentId, text } = req.body;
  const replycomm = await replycommRepository.create(
    postId,
    commentId,
    text,
    req.url,
    req.userId,
    req.username
  );
  res.status(201).json(replycomm);
  userRepository.addList(req.userId, "replycomm", replycomm.id);
}

export async function update(req, res) {
  const id = req.params.id;
  const { text } = req.body;

  const replycomm = await replycommRepository.getById(id);
  if (!replycomm) {
    return res.sendStatus(404);
  }
  if (req.username !== "padhmijn" && replycomm.userId !== req.userId) {
    return res.sendStatus(403);
  }

  const updated = await replycommRepository.update(id, text);
  res.status(200).json(updated);
}

export async function remove(req, res) {
  const id = req.params.id;

  const replycomm = await replycommRepository.getById(id);
  if (!replycomm) {
    return res.sendStatus(404);
  }
  if (req.username !== "padhmijn" && replycomm.userId !== req.userId) {
    return res.sendStatus(403);
  }

  await replycommRepository.remove(id);
  await userRepository.removeList(req.userId, "replycomm", replycomm.id);
  res.sendStatus(204);
}
