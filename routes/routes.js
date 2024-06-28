// routes/routes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, addReview, getReviews } = require('../controllers/Controllers');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/reviews', authMiddleware, addReview);
router.get('/reviews/:breweryId', getReviews);

module.exports = router;
