const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  name: String,
  image: String,
  description: String,
  status: Boolean,
  author: userId,
  usersDoingChallenge: [userId],
  usersCompletedChallenge: [userId],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
