import express from "express";
import "express-async-errors";
import { db } from "../db/database.js";

export async function getSample() {
  return db
    .execute("SELECT * FROM writesample") //
    .then((result) => result[0]);
}

export async function create(content) {
  return db
    .execute("INSERT INTO writesample (content) VALUES(?)", [content])
    .then(async (result) => await getSample(result[0].insertId));
}

export async function update(content) {
  return db
    .execute("UPDATE writesample SET content=? WHERE id=?", [content, 1])
    .then(async (result) => await getSample(result[0].insertId));
}
