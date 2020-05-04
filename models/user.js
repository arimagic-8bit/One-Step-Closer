const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const Challenge = mongoose.model("Challenge");

const userSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  actualChallenges: [
    {
      type: Schema.Types.ObjectId,
      ref: "Challenge",
    },
  ],
  createdChallenges: [
    {
      type: Schema.Types.ObjectId,
      ref: "Challenge",
    },
  ],
  completedChallenges: [
    {
      type: Schema.Types.ObjectId,
      ref: "Challenge",
    },
  ],
  badges: {
    type: [
      {
        category: {
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
        imageUrl: {
          type: String,
        },
      },
    ],
  },

  friends: {
    type: [String],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
