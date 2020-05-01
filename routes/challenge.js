const express = require("express");
const challengeRouter = express.Router();

// MAIN

challengeRouter.get("/", (req, res) => {
  res.render("challenge-views/challenge");
});

// Type of challenge

challengeRouter.get("/challenge/type", (res, req) => {});

module.exports = challengeRouter;
