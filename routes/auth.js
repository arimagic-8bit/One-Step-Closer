const express = require("express");
const authRouter = express.Router();
const User = require("./../models/user");

// Aquí va a ir las cosas de bcrypt

// SIGNUP

authRouter.get("/signup", (req, res) => {
  res.render("auth-views/signup-form");
});

module.exports = authRouter;
