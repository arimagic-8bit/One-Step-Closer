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

  userNow.populate("createdChallenges").then((user) => {
    console.log(user);
    res.render("user-views/userZoneCreat", { user });
  });
});




module.exports = usersRouter;
