import express from "express";
import "express-async-errors";
import { db } from "../db/database.js";

export async function getByUsername(username) {
  return db
    .execute("SELECT * FROM replycomm WHERE username=?", [username]) //
    .then((result) => result[0]);
}

export async function getById(id) {
  return db
    .execute("SELECT * FROM replycomm WHERE id=?", [id]) //
    .then((result) => result[0][0]);
}

export async function getByPostId(id) {
  return db
    .execute("SELECT * FROM replycomm WHERE postId=?", [id]) //
    .then((result) => result[0]);
}

export async function getByCommentId(commentId) {
  return db
    .execute("SELECT * FROM replycomm WHERE commentId=? order by id desc", [
      commentId,
    ]) //
    .then((result) => result[0]);
}

export async function getPostByReply(username) {
  const reply = await getByUsername(username);
  if (reply.length === 0) {
    return false;
  }
  const postId = reply.map((x) => x.postId);

  const sql = "SELECT * FROM post WHERE id IN(?)";
  const res = await db.query(sql, [postId], (err, result) => {
    if (err) throw err;
    result;
  });
  const data = { post: res[0], reply };
  return data;
}

export async function create(postId, commentId, text, url, userId, username) {
  return db
    .execute(
      "INSERT INTO replycomm (postId, commentId, text, createdAt, url, userId, username) VALUES(?,?,?,?,?,?,?)",
      [postId, commentId, text, new Date(), url, userId, username]
    )
    .then(async (result) => await getById(result[0].insertId));
}

export async function update(id, text) {
  return db
    .execute("UPDATE replycomm SET text=? WHERE id=?", [text, id])
    .then(async () => await getById(id));
}

export async function remove(id) {
  return db.execute("DELETE FROM replycomm WHERE id=?", [id]);
}
