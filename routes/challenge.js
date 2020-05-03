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
  // arriba estamos guardando la id del challenge

  const currentUser = req.session.currentUser; // guardamos el id del usuario de la sesión
  User.update({ _id: currentUser }, { $push: { actualChallenges: id } }) //return a promise
    .then((aceptedChallenge) => {
      res.redirect("/users/actual");
    })
    .catch((err) => next(err));
});

challengeRouter.post("/create", function (req, res, next) {
  const { type, name, description, image, author } = req.body;
  const currentUser = req.session.currentUser;
  const newChallenge = new Challenge({
    type,
    name,
    description,
    image,
    author,
  });
  newChallenge
    .save()
    .then(() => {
      const newChallengeId = newChallenge._id;
      User.update(
        { _id: currentUser },
        { $push: { createdChallenges: newChallengeId } }
      ).then(() => {
        res.redirect("/users/create");
      });
    })
    .catch((err) => console.log(err));
});

module.exports = challengeRouter;
