const express = require("express");
const challengeRouter = express.Router();

const Challenge = require("./../models/challenge");

// MAIN

challengeRouter.get("/", (req, res) => {
  const currentUser = req.session.currentUser; // save the user object in this session
  res.render("challenge-views/challenge", { currentUser }); //render the view and user object
});

// Type of challenge

challengeRouter.get("/list/:type", (req, res, next) => {
  const challengeType = req.params.type;

  Challenge.find({ type: challengeType })
    .then((challenge) => {
      res.render("challenge-views/type", { challenge });
    })
    .catch((err) => next(err));
});

challengeRouter.get("/:id", (req, res, next) => {
  const challengeTypeId = req.params.id;

  Challenge.findById(challengeTypeId)
    .then((challengeId) => {
      console.log(challengeId);
      res.render("challenge-views/challengeDetail", { challengeId });
    })
    .catch((err) => next(err));
});

module.exports = challengeRouter;
