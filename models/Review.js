// models/Review.js
const db = require('../db/config');

const createReviewTable = () => {
    const query = `
        CREATE TABLE IF NOT EXISTS reviews (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            rating INTEGER,
            description TEXT,
            userName TEXT,
            breweryId TEXT
        )
    `;
    return db.run(query);
};

const addReview = (review, callback) => {
    const query = `
        INSERT INTO reviews (rating, description, userName, breweryId) VALUES (?, ?, ?, ?)
    `;
    return db.run(query, [review.rating, review.description, review.userName, review.breweryId], callback);
};

const getReviewsByBreweryId = (breweryId, callback) => {
    const query = `
        SELECT * FROM reviews WHERE breweryId = ?
    `;
    return db.all(query, [breweryId], callback);
};

module.exports = { createReviewTable, addReview, getReviewsByBreweryId };
