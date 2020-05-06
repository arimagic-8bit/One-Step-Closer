const mongoose = require("mongoose");

require("dotenv").config();
const Challenge = require("./../models/challenge");

const challenges = [
  {
    type: "waste management",
    name: "No Plastic Bag",
    image:
      "https://image.freepik.com/free-vector/plastic-bag-prohibited-crossed-out-bag-icon-no-plastic-brown-linen-eco-bag-with-sign-bring-your-own-care-about-environment_136277-224.jpg",
    description:
      "Don't use plastic bags for a week. You will spare the Earth centuries of pollution",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "waste management",
    name: "No waste",
    image:
      "https://image.freepik.com/free-photo/flat-lay-arrangement-zero-waste-lettering-with-copy-space_23-2148491132.jpg",
    description:
      "Go one week without creating any trash. None. Zero. Compost & Recycle your mantra",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "waste management",
    name: "No foods plastic packed",
    image:
      "https://image.freepik.com/free-photo/plastic-free-fruit-veggies-movement-concept-hand-holding-piede-broccoli-with-plastic-packaging_78665-229.jpg",
    description: "Go a week without buying food packed in plastic",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "water",
    name: "Catch the water",
    image: "https://pbs.twimg.com/media/CTmJpW2WIAEHyWG.jpg",
    description:
      "Keep a bucket in the shower to catch water and use it to water the house plants.",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "water",
    name: "Time your shower",
    image:
      "https://img.freepik.com/foto-gratis/mano-sosteniendo-cronometro-aislado-blanco_83369-102.jpg?size=626&ext=jpg",
    description:
      "Time your shower to keep it under 5 minutes. You'll save up to 3785,41 liters per month.",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "water",
    name: "Water for the pet",
    image:
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/08/06105752/water-bowl-water-intoxication-in-dogs.jpg",
    description:
      "When you give your pet fresh water, don’t throw the old water down the drain. Use it to water your trees or shrubs.",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "nutrition",
    name: "Veggie week",
    image:
      "https://image.freepik.com/vector-gratis/di-no-bolsas-plastico-firmar-logo_10045-135.jpg",
    description: "Try not to eat meat for a week in total",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "nutrition",
    name: "Responsible Millenial",
    image:
      "https://image.freepik.com/vector-gratis/di-no-bolsas-plastico-firmar-logo_10045-135.jpg",
    description:
      "Buy local and seasonal food during one week. Your local avocado producer will be in love with you!",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "nutrition",
    name: "30 days veggie",
    image:
      "https://image.freepik.com/vector-gratis/di-no-bolsas-plastico-firmar-logo_10045-135.jpg",
    description:
      "If you shift from a regular diet to 30 days vegan, you could save up to aprox 3 animals!",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "energy",
    name: "Close blinds",
    image:
      "https://image.freepik.com/vector-gratis/di-no-bolsas-plastico-firmar-logo_10045-135.jpg",
    description: "Close blinds on sunny windows on hot days during one week",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "energy",
    name: "Stairs",
    image:
      "https://image.freepik.com/vector-gratis/di-no-bolsas-plastico-firmar-logo_10045-135.jpg",
    description: "Use stairs instead of the elevator during 7 days",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "energy",
    name: "Shut down devices",
    image:
      "https://image.freepik.com/vector-gratis/di-no-bolsas-plastico-firmar-logo_10045-135.jpg",
    description:
      "Shut down computers and monitors when not in use during one week",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "transportation",
    name: "Public Transport",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588787973/One%20Step%20Closer%20images/bicycle_mumbvm.png",
    description:
      "Try not to driving to work. Hop on a bus, metro or train for a week",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "transportation",
    name: "Carpool",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588787973/One%20Step%20Closer%20images/bicycle_mumbvm.png",
    description: "Try carpooling during one week to go to work",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "transportation",
    name: "Cycle To Work",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588787973/One%20Step%20Closer%20images/bicycle_mumbvm.png",
    description:
      "Reduce greenhouse gas emissions and increase your fitness levels cycling to work during one week",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "responsible consumption",
    name: "Purchase local food",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588789057/One%20Step%20Closer%20images/nature_rwkk2d.png",
    description:
      "Buy local and seasonal foods during 30 days to reduce your carbon footprint",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "responsible consumption",
    name: "Grow your own produce",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588789057/One%20Step%20Closer%20images/nature_rwkk2d.png",
    description:
      "Try growing your own produce in a community garden in your backyard or even in your balcony!",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "responsible consumption",
    name: "Shop Smart",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588789057/One%20Step%20Closer%20images/nature_rwkk2d.png",
    description:
      "Avoid buying more food than you need. Try making a list of items that you need to buy and stick to that list during 14 days",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
];

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connection.name}"`);
    return x.connection.dropDatabase();
  })
  .then(() => {
    const newCollection = Challenge.create(challenges);

    console.log(newCollection);
    newCollection
      .then((challengesCollection) => {
        console.log("challengesCollection", challengesCollection);
      })
      .catch((err) => {
        console.log("error", err);
      });
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });
