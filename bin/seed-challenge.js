const mongoose = require("mongoose");

require("dotenv").config();
const Challenge = require("./../models/challenge");

const challenges = [
  {
    type: "waste",
    name: "No Plastic Bag",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588839891/One%20Step%20Closer%20images/no-plastic_n1xqkn.png",
    description:
      "Don't use plastic bags for a week. You will spare the Earth centuries of pollution",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "waste",
    name: "No waste",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588875035/One%20Step%20Closer%20images/waste_1_yciroq.png",
    description:
      "Go one week without creating any trash. None. Zero. Compost & Recycle your mantra",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "waste",
    name: "No foods plastic packed",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588839924/One%20Step%20Closer%20images/harvest_hxpxap.png",
    description: "Go a week without buying food packed in plastic",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "water",
    name: "Catch the water",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588839990/One%20Step%20Closer%20images/bucket_n0jlks.png",
    description:
      "Keep a bucket in the shower to catch water and use it to water the house plants.",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "water",
    name: "Time your shower",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588839959/One%20Step%20Closer%20images/shower_uaihas.png",
    description:
      "Time your shower to keep it under 5 minutes. You'll save up to 3785,41 liters per month.",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "water",
    name: "Water for the pet",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588840040/One%20Step%20Closer%20images/bowl_ahxn7n.png",
    description:
      "When you give your pet fresh water, don’t throw the old water down the drain. Use it to water your trees or shrubs.",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "nutrition",
    name: "Veggie week",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588875052/One%20Step%20Closer%20images/salad_hd1se5.png",
    description: "Try not to eat meat for a week in total",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "nutrition",
    name: "Responsible Millenial",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588840100/One%20Step%20Closer%20images/farming_tojmrh.png",
    description:
      "Buy local and seasonal food during one week. Your local avocado producer will be in love with you!",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "nutrition",
    name: "30 days veggie",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588875072/One%20Step%20Closer%20images/pig_e52lge.png",
    description:
      "If you shift from a regular diet to 30 days vegan, you could save up to aprox 3 animals!",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "energy",
    name: "Close blinds",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588875162/One%20Step%20Closer%20images/blinds_hkkmrb.png",
    description: "Close blinds on sunny windows on hot days during one week",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "energy",
    name: "Stairs",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588875099/One%20Step%20Closer%20images/stairs_cbem4i.png",
    description: "Use stairs instead of the elevator during 7 days",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "energy",
    name: "Shut down devices",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588875206/One%20Step%20Closer%20images/close_vaocoy.png",
    description:
      "Shut down computers and monitors when not in use during one week",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "transportation",
    name: "Public Transport",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588875189/One%20Step%20Closer%20images/train_yi6mam.png",
    description:
      "Try not to driving to work. Hop on a bus, metro or train for a week",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "transportation",
    name: "Carpool",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588875117/One%20Step%20Closer%20images/car-sharing_uf9gye.png",
    description: "Try carpooling during one week to go to work",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "transportation",
    name: "Cycle To Work",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588875140/One%20Step%20Closer%20images/bicycle_1_z2bped.png",
    description:
      "Reduce greenhouse gas emissions and increase your fitness levels cycling to work during one week",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "consumption",
    name: "Purchase local food",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588840100/One%20Step%20Closer%20images/farming_tojmrh.png",
    description:
      "Buy local and seasonal foods during 30 days to reduce your carbon footprint",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "consumption",
    name: "Grow your own produce",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588874729/One%20Step%20Closer%20images/agriculture_vrkdox.png",
    description:
      "Try growing your own produce in a community garden in your backyard or even in your balcony!",
    usersDoingSameChallenges: [],
    usersCompletedChallenges: [],
  },
  {
    type: "consumption",
    name: "Shop Smart",
    image:
      "https://res.cloudinary.com/dywatr6gy/image/upload/v1588874761/One%20Step%20Closer%20images/shopping-basket_dy3tlh.png",
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
