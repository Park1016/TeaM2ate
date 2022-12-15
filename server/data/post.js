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

export async function create(cate, text, userId, lang) {
    return db
    .execute('INSERT INTO post (text, createdAt, cate, userId, view, type, lang) VALUES(?,?,?,?,?,?,?)', [
        text,
        new Date(),
        cate,
        userId,
        1,
        'gen',
        JSON.stringify(lang)
    ])
    .then(async(result) => await getById(result[0].insertId));
}

export async function update(id, cate, text, lang) {
    return db
    .execute('UPDATE post SET cate=?, text=?, lang=? WHERE id=?', [cate, text, lang, id])
    .then(async() => await getById(id));
}

export async function remove(id) {
    db.execute('DELETE FROM post WHERE id=?', [id]);

}