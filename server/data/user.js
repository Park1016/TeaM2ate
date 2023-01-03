import express from "express";
import "express-async-errors";
import { db } from "../db/database.js";

export async function getById(id) {
  return db
    .execute("SELECT * FROM user WHERE id=?", [id]) //
    .then((result) => result[0][0]);
}

export async function findByUsername(username) {
  return db
    .execute("SELECT * FROM user WHERE username=?", [username]) //
    .then((result) => result[0][0]);
}

export async function signUp(user) {
  const { username, password, name, email, url } = user;
  return db
    .execute(
      "INSERT INTO user (username, password, name, email, url, type, introduce, bookmark, post, comment, follower, following, report, alert, send_offer, get_offer) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        username,
        password,
        name,
        email,
        url,
        "gen",
        "",
        JSON.stringify([]),
        JSON.stringify([]),
        JSON.stringify([]),
        JSON.stringify([]),
        JSON.stringify([]),
        JSON.stringify([]),
        JSON.stringify([]),
        JSON.stringify([]),
        JSON.stringify([]),
      ]
    )
    .then((result) => result[0].insertId);
}

export async function addList(userId, column, value) {
  const user = await getById(userId);
  const arr =
    column === "post" ? [value, ...user.post] : [value, ...user.comment];
  return db
    .execute(`UPDATE user SET ${column}=? WHERE id=?`, [arr, userId])
    .then(async () => await getById(userId));
}

export async function update(id, username, password, url, introduce, alert) {
  return db
    .execute(
      `UPDATE user SET username=?, password=?, url=?, introduce=? alert=?, WHERE id=?`,
      [username, password, url, introduce, alert, id]
    )
    .then(async () => await getById(id));
}

export async function remove(id) {
  db.execute("DELETE FROM user WHERE id=?", [id]);
}

export async function removeList(userId, column, value) {
  const user = await getById(userId);
  const arr =
    column === "post"
      ? user.post.filter((x) => x !== value)
      : user.comment.filter((x) => x !== value);
  return db
    .execute(`UPDATE user SET ${column}=? WHERE id=?`, [arr, userId])
    .then(async () => await getById(userId));
}
