const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const challengeSchema = Schema({
  type: {
    type: String,
    enum: [
      "water",
      "energy",
      "waste",
      "nutrition",
      "consumption",
      "transportation",
    ],
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    default:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588861260/One%20Step%20Closer%20images/647e786a09ec40ab675b23133c7d11f4_earth-clipart-cute_2400-2400_v2xivh.png",
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
