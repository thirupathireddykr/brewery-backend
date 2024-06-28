// controllers/Controllers.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Review = require("../models/Review");
require("dotenv").config();

const registerUser = (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return res.status(500).send("Error hashing password");
    User.addUser({ email, password: hash }, (err) => {
      if (err) return res.status(500).send("Error registering user");
      res.status(200).send("User registered successfully");
    });
  });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;
  User.findUserByEmail(email, (err, user) => {
    if (err || !user) return res.status(400).send("User not found");
    bcrypt.compare(password, user.password, (err, result) => {
      if (err || !result) return res.status(400).send("Incorrect password");
      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      res.status(200).json({ token });
    });
  });
};

const addReview = (req, res) => {
  const { rating, description, userName, breweryId } = req.body;
  Review.addReview({ rating, description, userName, breweryId }, (err) => {
    if (err) return res.status(500).send("Error adding review");
    res.status(200).send("Review added successfully");
  });
};

const getReviews = (req, res) => {
  const { breweryId } = req.params;
  Review.getReviewsByBreweryId(breweryId, (err, reviews) => {
    if (err) return res.status(500).send("Error fetching reviews");
    res.status(200).json(reviews);
  });
};

module.exports = { registerUser, loginUser, addReview, getReviews };
