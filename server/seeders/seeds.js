const faker = require('faker');
const db = require('../config/connection');
const { User, Pattern, Needle, YarnCharacteristic} = require('../models');

db.once('open', async () => {
  await User.deleteMany({});
  await Pattern.deleteMany({});
  
  // create Users
  const userData = [
    {
      username: 'alesmonde0',
      email: 'ales@gmail.com',
      password: 'password123'
    },
    {
      username: 'jwilloughway1',
      email: 'jwil@gmail.com',
      password: 'password123'
    },
    {
      username: 'iboddam2',
      email: 'iboddam@gmail.com',
      password: 'password123'
    },
    {
      username: 'dstanmer3',
      email: 'dstanmer@gmail.com',
      password: 'password123'
    }
  ];

  const createdUsers = await User.collection.insertMany(userData);

  // created Pattern Data
  const needles = await Needle.find();
  const fibers = await YarnCharacteristic.find({ type: "fiber" });
  const weights = await YarnCharacteristic.find({ type: "weight" });
  const colors = await YarnCharacteristic.find({ type: "color" });
  const patternData = [
    {
      name: 'Dragon',
      username: 'alesmonde0',
      project: 'scarf',
      for: 'children',
      skill: 'beginner',
      fiber: fibers[Math.floor(Math.random() * fibers.length)]._id,
      weight: weights[Math.floor(Math.random() * weights.length)]._id,
      color: colors[Math.floor(Math.random() * colors.length)]._id,
      needle: needles[Math.floor(Math.random() * needles.length)]._id,
      description: faker.lorem.words(Math.round(Math.random() * 20) + 1),
      instructions: [faker.lorem.words(Math.round(Math.random() * 20) + 1), faker.lorem.words(Math.round(Math.random() * 20) + 1), faker.lorem.words(Math.round(Math.random() * 20) + 1),]
    },

    {
      name: 'Fish',
      username: 'jwilloughway1',
      project: 'shirt',
      for: 'women',
      skill: 'intermediate',
      fiber: fibers[Math.floor(Math.random() * fibers.length)]._id,
      weight: weights[Math.floor(Math.random() * weights.length)]._id,
      color: colors[Math.floor(Math.random() * colors.length)]._id,
      needle: needles[Math.floor(Math.random() * needles.length)]._id,
      description: faker.lorem.words(Math.round(Math.random() * 20) + 1),
      instructions: [faker.lorem.words(Math.round(Math.random() * 20) + 1), faker.lorem.words(Math.round(Math.random() * 20) + 1), faker.lorem.words(Math.round(Math.random() * 20) + 1),]
    },

    {
      name: 'Triangle',
      username: 'jwilloughway1',
      project: 'shirt',
      for: 'women',
      skill: 'advance',
      fiber: fibers[Math.floor(Math.random() * fibers.length)]._id,
      weight: weights[Math.floor(Math.random() * weights.length)]._id,
      color: colors[Math.floor(Math.random() * colors.length)]._id,
      needle: needles[Math.floor(Math.random() * needles.length)]._id,
      description: faker.lorem.words(Math.round(Math.random() * 20) + 1),
      instructions: [faker.lorem.words(Math.round(Math.random() * 20) + 1), faker.lorem.words(Math.round(Math.random() * 20) + 1),]
    },
  ];

  let createdPatterns = [];
  for (let i = 0; i < patternData.length; i++) {
    console.log(patternData[i]);
    const createdPattern = await Pattern.create({ ...patternData[i]});

    const updateUser = await User.findOneAndUpdate(
      { username: patternData[i].username },
      { $push: { patterns: createdPattern._id } },
      { new: true, runValidators: true }
    );

    createdPatterns.push(createdPattern);
  }


  console.log('all done');
  process.exit(0);
})