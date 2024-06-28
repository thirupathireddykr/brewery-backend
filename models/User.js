// models/User.js
const db = require('../db/config');

const createUserTable = () => {
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE,
            password TEXT
        )
    `;
    return db.run(query);
};

const addUser = (user, callback) => {
    const query = `
        INSERT INTO users (email, password) VALUES (?, ?)
    `;
    return db.run(query, [user.email, user.password], callback);
};

const findUserByEmail = (email, callback) => {
    const query = `
        SELECT * FROM users WHERE email = ?
    `;
    return db.get(query, [email], callback);
};

module.exports = { createUserTable, addUser, findUserByEmail };
