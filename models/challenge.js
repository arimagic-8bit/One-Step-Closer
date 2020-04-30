const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const challengeSchema = Schema({
  name: String,
  image: String,
  description: String,
  status: Boolean,
  author: userId,
  usersDoingChallenge: [userId],
  usersCompletedChallenge: [userId],
});

const Challenge = mongoose.model("Challenge", challengeSchema);

module.exports = Challenge;
