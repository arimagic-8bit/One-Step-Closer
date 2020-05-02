const express = require("express");
const challengeRouter = express.Router();

const Challenge = require("./../models/challenge");

const User = require("./../models/user");

// MAIN

challengeRouter.get("/", (req, res) => {
  const currentUser = req.session.currentUser; // save the user object in this session
  res.render("challenge-views/challenge", { currentUser }); //render the view and user object
});

challengeRouter.get("/create", (req, res) => {
  res.render("challenge-views/create"); //render the view
});

// Type of challenge

challengeRouter.get("/list/:type", (req, res, next) => {
  const challengeType = req.params.type;

  Challenge.find({ type: challengeType })
    .then((challenge) => {
      res.render("challenge-views/type", { challenge, challengeType });
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

challengeRouter.post("/:id/accept", (req, res, next) => {
  const id = req.params.id; // assign to a const the value of the key/pair in req.params
  // the oterway is to deconstr. => const {id} = req.params
  const currentUser = req.session.currentUser;
  User.update({ _id: currentUser }, { $push: { actualChallenges: id } }) //return a promise
    .then((aceptedChallenge) => {
      console.log(aceptedChallenge);
      res.redirect("/users/actual");
    })
    .catch((err) => next(err));
});

module.exports = challengeRouter;
