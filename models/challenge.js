const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const challengeSchema = Schema({
  type: {
    type: String,
    enum: [
      "water",
      "energy",
      "waste management",
      "nutrition",
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
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  usersDoingSameChallenges: [String],
  usersCompletedChallenges: [String],
});

const Challenge = mongoose.model("Challenge", challengeSchema);

module.exports = Challenge;
