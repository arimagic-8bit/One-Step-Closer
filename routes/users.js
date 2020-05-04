var express = require("express");
const usersRouter = express.Router();

const Challenge = require("./../models/challenge");
const User = require("./../models/user");

usersRouter.get("/actual", function (req, res) {
  const currentUserID = req.session.currentUser;
  const userNow = User.findById(currentUserID);

  userNow.populate("actualChallenges").then((user) => {
    console.log(user);
    res.render("user-views/userZone", { user });
  });
});

usersRouter.get("/completed", function (req, res) {
  const currentUserID = req.session.currentUser;
  const userNow = User.findById(currentUserID);

  userNow.populate("completedChallenges").then((user) => {
    console.log(user);
    res.render("user-views/userZoneComp", { user });
  });
});

usersRouter.get("/created", function (req, res) {
  const currentUserID = req.session.currentUser;
  const userNow = User.findById(currentUserID);

  userNow
    .populate("createdChallenges")
    .then((user) => {
      console.log(user);
      res.render("user-views/userZoneCreat", { user });
    })
    .catch((err) => console.log(err));
});

usersRouter.get("/created/:id/details", function (req, res) {
  const challengeTypeId = req.params.id;
  const currentUserId = req.session.currentUser._id;

  let promise1 = Challenge.findById(challengeTypeId)
    .then((challenge) => challenge)
    .catch((err) => console.log(err));

  let promise2 = User.findById(currentUserId)
    .then((user) => user)
    .catch((err) => console.log(err));

  Promise.all([promise1, promise2])
    .then((results) => {
      let challenge = results[0];
      let user = results[1];
      let challengeIsTaken = false;

      if (user.actualChallenges.includes(challenge._id)) {
        challengeIsTaken = true;
        console.log(challengeIsTaken);
      }
      res.render("user-views/userModify", {
        challenge,
        challengeIsTaken,
      });
    })
    .catch((err) => next(err));
  });


usersRouter.get("/:id/edit", (req, res, next) => {
  const currentUserID = req.session.currentUser._id;
  const challengeId = req.params.id;
  
  Challenge.findById(challengeId)
    .then((challenge) => {
      res.render("user-views/editChallenge", { challenge });
    })
    .catch((err) => next(err));
});


usersRouter.post("/:id/edit", (req, res, next) => {
  const currentUserID = req.session.currentUser._id;
  const challengeId = req.params.id;
  const { name, image, description } = req.body;
  console.log("EOOOOOOOO")
  Challenge.update({_id: challengeId}, { name, image, description })
    .then((updatedChallenge) => {
      console.log("HERE", updatedChallenge);
      res.redirect("/users/created");
    })
    .catch((err) => next(err));
});


usersRouter.post("/:id/completed", function (req, res, next) {
  const challengeId = req.params.id;
  const currentUserID = req.session.currentUser._id;
  User.update(
    { _id: currentUserID },
    {
      $pull: { actualChallenges: challengeId }, //we pull from actualChallenges the challenge id
      $addToSet: { completedChallenges: challengeId }, //we add to completedChallenges the retieved id
    }
  )
    .then(() => {
      res.redirect("/users/completed");
    })
    .catch((err) => console.log(err));
});

usersRouter.post("/:id/leave", function (req, res, next) {
  const challengeId = req.params.id;
  const currentUserID = req.session.currentUser._id;
  User.update(
    { _id: currentUserID },
    {
      $pull: { actualChallenges: challengeId },
    }
  )
    .then(() => {
      res.redirect("/users/actual");
    })
    .catch((err) => console.log(err));
});


usersRouter.post("/:id/delete", (req, res, next) => {
  
  const challengeId = req.params.id;
  
  Challenge.findByIdAndRemove(challengeId) //return a promise
    .then((removedChallenge) => {
      console.log(removedChallenge);
      res.redirect("/users/created");
    })
    .catch((err) => console.log(err));
});




module.exports = usersRouter;
