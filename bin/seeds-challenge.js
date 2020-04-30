const mongoose = require('mongoose');

const Challenge = require('./../models/challenge');

const challenges = [
  {
    type: "Plastic",
    name: "No Plastic Bag",
    image: "https://images.app.goo.gl/vTKcXHuQtGFDzYy28",
    description: "Don't use plastic bags for a week. You will spare the Earth centuries of pollution",
    status: false,
    author: "",
    usersDoingChallenge: [],
    usersCompletedChallenge: []
  },
  {
    name: String,
    image: String,
    description: String,
    status: Boolean,
    author: userId,
    usersDoingChallenge: [userId],
    usersCompletedChallenge: [userId]
  },
 {
    name: String,
    image: String,
    description: String,
    status: Boolean,
    author: userId,
    usersDoingChallenge: [userId],
    usersCompletedChallenge: [userId]
    }
  ];

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true, useUnifiedTopology: true, 'useCreateIndex', true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connection.name}"`)
    return x.connection.dropDatabase();
  })
  .then(() =>{
    const newCollection = Challenge.create(challenges)
  
  console.log(newCollection);
  newCollection
    .then( (challengesCollection) => {
      console.log("challengesCollection", challengesCollection)
    })
    .catch((err) => {
      console.log("error", error)
    })
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });