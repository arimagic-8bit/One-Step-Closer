var express = require("express");
const usersRouter = express.Router();

const Challenge = require("./../models/challenge");
const User = require("./../models/user");

// usersRouter.get("/actual", (req, res) => {
//   const currentUser = req.session.currentUser._id;
//   User.findById(currentUser)
//     Challenge.populate()
//     .then((user) => {
//       console.log(user.actualChallenges);
//       res.render("user-views/userZone", { user }); //render the view
//     })
//     .catch((err) => console.log(err));
// });

usersRouter.get("/actual", function (req, res) {
  const currentUserID = req.session.currentUser;
  const userNow = User.findById(currentUserID);

  userNow.populate("actualChallenges").then((user) => {
    console.log(user);
    res.render("user-views/userZone", { user });
  });
});

// usersRouter.get("/actual", function (req, res) {
//   const currentUser = req.session.currentUser;
//   Challenge.find({}, function (err, challenges) {
//     User.populate(challenges, { path: "actualChallenge.name" });
//   });
// });

// usersRouter.get("/completed", (req, res) => {

//   res.render("user-views/userZone"); //render the view
// });

module.exports = usersRouter;
