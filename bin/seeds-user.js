const mongoose = require('mongoose');

const User = require('./../models/user');

const users = [
  {
    username: Pennywise,
    password: bananarama,
    actualChallenges: [challengeId],
    createdChallenges:[challengeId],
    createdChallenges:[challengeId],
    badges: [{ category: imageUrl}],
    friends: [userId]
  },
  {
    username: Freddy,
    password: bananarama,
    actualChallenges: [challengeId],
    createdChallenges:[challengeId],
    createdChallenges:[challengeId],
    badges: [{ category: imageUrl}],
    friends: [userId]
  },
  {
    username: Jason,
    password: bananarama,
    actualChallenges: [challengeId],
    createdChallenges:[challengeId],
    createdChallenges:[challengeId],
    badges: [{ category: imageUrl}],
    friends: [userId]
  }
];

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true, useUnifiedTopology: true, 'useCreateIndex', true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connection.name}"`)
    return x.connection.dropDatabase();
  })
  .then(() =>{
    const newCollection = User.create(users)
  
  console.log(newCollection);
  newCollection
    .then( (usersCollection) => {
      console.log("usersCollection", usersCollection)
    })
    .catch((err) => {
      console.log("error", error)
    })
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
