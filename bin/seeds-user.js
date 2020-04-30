const mongoose = require('mongoose');

const User = require('./../models/user');

const users = [
  {
    username: Pennywise,
    password: bananarama,
    actualChallenges: [],
    createdChallenges:[],
    badges: [{
              category: "waste management",
              imageUrl: "https://images.app.goo.gl/vTKcXHuQtGFDzYy28"
          }],
    friends: []
  },
  {
    username: Freddy,
    password: bananarama,
    actualChallenges: [],
    createdChallenges:[],
    badges: [{ 
               category: "",
               imageUrl: ""
            }],
    friends: []
  },
  {
    username: Jason,
    password: bananarama,
    actualChallenges: [],
    createdChallenges:[],
    badges: [{ 
               category: "",
               imageUrl: ""
            }],
    friends: []
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
