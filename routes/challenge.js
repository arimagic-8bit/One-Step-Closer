const express = require("express");
const challengeRouter = express.Router();

const Challenge = require("./../models/challenge");

const User = require("./../models/user");

const parser = require("./../config/cloudinary");

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
  const currentUserId = req.session.currentUser._id;

  let promise1 = Challenge.findById(challengeTypeId)
    .populate("author")
    .then((challenge) => challenge)
    .catch((err) => console.log(err));

  let promise2 = User.findById(currentUserId)
    .then((user) => user)
    .catch((err) => console.log(err));

  Promise.all([promise1, promise2])
    .then((results) => {
      let challenge = results[0];
      console.log(challenge);
      let user = results[1];
      let challengeIsTaken = false;
      let author;

      if (challenge.author) {
        author = challenge.author.username;
        console.log(author);
      }

      if (user.actualChallenges.includes(challenge._id)) {
        challengeIsTaken = true;
      }
      res.render("challenge-views/challengeDetail", {
        challenge,
        challengeIsTaken,
        author,
      });
    })
    .catch((err) => next(err));
});

challengeRouter.post("/:id/accept", (req, res, next) => {
  const id = req.params.id; // assign to a const the value of the key/pair in req.params
  // the oterway is to deconstr. => const {id} = req.params
  // arriba estamos guardando la id del challenge

  const currentUser = req.session.currentUser._id; // guardamos el id del usuario de la sesión
  User.update({ _id: currentUser }, { $push: { actualChallenges: id } }) //return a promise
    .then((aceptedChallenge) => {
      res.redirect("/users/actual");
    })
    .catch((err) => next(err));
});

challengeRouter.post("/create", parser.single("image"), function (
  req,
  res,
  next
) {
  const { type, name, description } = req.body;
  const currentUserId = req.session.currentUser._id;
  if (!req.file) {
    res.render("challenge-views/create", {errorMessage:"Don't forget to add an image!"})
  }
  const image_url = req.file.secure_url;
  const newChallenge = new Challenge({
    type,
    name,
    description,
    image: image_url,
    author: currentUserId,
  });
  newChallenge
    .save()
    .then(() => {
      const newChallengeId = newChallenge._id;
      User.update(
        { _id: currentUserId },
        { $push: { createdChallenges: newChallengeId } }
      ).then(() => {
        res.redirect("/users/created");
      });
    })
    .catch((err) => console.log(err));
});

module.exports = challengeRouter;
