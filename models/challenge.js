const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const challengeSchema = Schema({
  type: {
    type: String,
    enum: [
      "water",
      "energy",
      "waste management",
      "nourishment",
      "consume",
      "other",
    ],
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: Boolean,
  author: String,
  usersDoingChallenge: [String],
  usersCompletedChallenge: [String],
});

const Challenge = mongoose.model("Challenge", challengeSchema);

module.exports = Challenge;
