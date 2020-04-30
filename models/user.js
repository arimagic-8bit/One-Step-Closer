const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  actualChallenges: {
    type: [String],
  },
  createdChallenges: {
    type: [String],
  },
  createdChallenges: {
    type: [String],
  },
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
