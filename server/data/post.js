import express from 'express';
import 'express-async-errors';
import * as userRepository from './user.js';
import { db } from '../db/database.js';


export async function getByUsername(username) {
    return db
    .execute('SELECT * FROM post WHERE username=?', [username]) //
    .then((result) => result[0][0]);
}

export async function getById(id) {
    return db
    .execute('SELECT * FROM post WHERE id=?', [id]) //
    .then((result) => result[0][0]);
}

export async function create(cate, username, title, text, userId, lang, type) {
    return db
    .execute('INSERT INTO post (title, username, text, createdAt, cate, userId, view, lang, type, progress) VALUES(?,?,?,?,?,?,?,?,?,?)', [
        title,
        username,
        text,
        new Date(),
        cate,
        userId,
        1,
        JSON.stringify(lang),
        type,
        'ing'
    ])
    .then(async(result) => await getById(result[0].insertId));
}

export async function update(id, cate, title, text, lang, type, progress) {
    return db
    .execute('UPDATE post SET cate=?, title=?, text=?, lang=?, type=?, progress=? WHERE id=?', [cate, title, text, lang, type, progress, id])
    .then(async() => await getById(id));
}

export async function remove(id) {
    db.execute('DELETE FROM post WHERE id=?', [id]);

}