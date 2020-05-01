const express = require("express");
const challengeRouter = express.Router();

const Challenge = require("./../models/challenge");

// MAIN

challengeRouter.get("/", (req, res) => {
  res.render("challenge-views/challenge");
});

// Type of challenge

challengeRouter.get("/:type", (res, req, next) => {
  const challengeType = req.params.type;

  Challenge.find(challengeType)
    .then((challenge) => {
      console.log(challenge);
      res.render("/type", {challenge});
    })
    .catch((err) => next(err));
});

module.exports = challengeRouter;
