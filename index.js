// index.js
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const User = require("./models/User");
const Review = require("./models/Review");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", routes);

// Initialize database tables
User.createUserTable();
Review.createReviewTable();

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
