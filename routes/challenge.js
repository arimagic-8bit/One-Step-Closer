const express = require("express");
const challengeRouter = express.Router();

// MAIN

challengeRouter.get("/", (req, res) => {
  res.render("challenge-views/challenge");
});

module.exports = challengeRouter;
