var express = require("express");
const usersRouter = express.Router();

const Challenge = require("./../models/challenge");
const User = require("./../models/user");

usersRouter.get("/actual", (req, res) => {
  const currentUser = req.session.currentUser._id;
  User.findById(req.session.currentUser._id)
    .populate("actualChallenges", "user")
    .then((user) => {
      console.log(user.actualChallenges);
      res.render("user-views/userZone", { user }); //render the view
    })
    .catch((err) => console.log(err));
});

// usersRouter.get("/completed", (req, res) => {

//   res.render("user-views/userZone"); //render the view
// });

module.exports = usersRouter;
