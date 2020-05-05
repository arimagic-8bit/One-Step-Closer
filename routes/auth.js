const express = require("express");
const authRouter = express.Router();
const User = require("./../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// SIGNUP

authRouter.get("/signup", (req, res) => {
  res.render("auth-views/signup-form");
});

authRouter.post("/signup", (req, res, next) => {
  const { username, password } = req.body;

  if (username === "" || password === "") {
    res.render("auth-views/signup-form", {
      errorMessage: "Username and Password are required.",
    });
    return;
  }
  User.findOne({ username })
    .then((userObj) => {
      if (userObj) {
        res.render("auth-views/signup-form", {
          errorMessage: `Username ${username} is already taken.`,
        });
        return;
      } else {
        // 4. Generate salts and encrypt the password
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);

        // 5. Create new user in DB, saving the encrypted password
        User.create({ username, password: hashedPassword })
          .then((user) => {
            user.password = "****";
            req.session.currentUser = user;
            res.redirect("/challenge");
          })
          .catch((err) => {
            res.render("auth-views/signup-form", {
              errorMessage: `Error during signup`,
            });
          });
      }
    })
    .catch((err) => next(err));
});

// LOGIN

authRouter.get("/login", (req, res) => {
  res.render("auth-views/login-form");
});

authRouter.post("/login", (req, res, next) => {
  const { password, username } = req.body;

  // 1. Check if the username and password are provided
  if (username === "" || password === "") {
    res.render("auth-views/login-form", {
      errorMessage: "Username and Password are required.",
    });
    return;
  }

  // 2. Check if the user/username exist in the DB

  User.findOne({ username })
    .then((user) => {
      if (!user) {
        res.render("auth-views/login-form", {
          errorMessage: "Input invalid",
        });
      } else {
        const encryptedPassword = user.password;
        const passwordCorrect = bcrypt.compareSync(password, encryptedPassword);

        if (!password) {
          res.render("auth-views/login-form", {
            errorMessage: "Wrong password",
          });
        } else {
          user.password = "****";
          req.session.currentUser = user;

          res.redirect("/challenge"); //as we want the user to view directly the "main" page, we redirect his/her request (no information is shown) to the main page.
        }
      }
    })
    .catch((err) => console.log(err));
});

// POST '/auth/logout'
authRouter.get("/logout", (req, res) => {
  // We remove/destroy the session record in the database
  console.log("EOOOO");
  req.session.destroy((err) => {
    if (err) {
      res.render("error", { message: "Something went wrong! Yikes!" });
    }
    // Redirect to the page (we choose - home page)
    res.redirect("/");
  });
});

module.exports = authRouter;
