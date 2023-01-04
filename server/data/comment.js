﻿import express from "express";
import "express-async-errors";
import { db } from "../db/database.js";
import * as userRepository from "./user.js";

export async function getByUsername(username) {
  return db
    .execute("SELECT * FROM comment WHERE username=?", [username]) //
    .then((result) => result[0]);
}

export async function getByPostId(postId) {
  return db
    .execute("SELECT * FROM comment WHERE postId=?", [postId]) //
    .then((result) => result[0]);
}

export async function getPostByComment(username) {
  const user = await userRepository.getByUsername(username);
  const comment = user.comment;

  const sql = "SELECT * FROM post WHERE id IN(?)";
  const res = await db.query(sql, [comment], (err, result) => {
    if (err) throw err;
    result;
  });
  return res[0];
}

export async function getById(id) {
  return db
    .execute("SELECT * FROM comment WHERE id=?", [id]) //
    .then((result) => result[0][0]);
}

export async function create(postId, text, userId, username) {
  return db
    .execute(
      "INSERT INTO comment (postId, text, createdAt, userId, username) VALUES(?,?,?,?,?)",
      [postId, text, new Date(), userId, username]
    )
    .then(async (result) => await getById(result[0].insertId));
}

export async function update(id, text) {
  return db
    .execute("UPDATE comment SET text=? WHERE id=?", [text, id])
    .then(async () => await getById(id));
}

export async function remove(id) {
  return db.execute("DELETE FROM comment WHERE id=?", [id]);
}
