const faker = require('faker');
const db = require('../config/connection');
const { User, Pattern, Needle} = require('../models');

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
  const patternData = [
    {
      name: 'Dragon',
      username: 'alesmonde0',
      project: 'scarf',
      for: 'children',
      skill: 'beginner',
      fiber: 'acrylic', weight: 'bulky', color: 'black',
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
      fiber: 'cotton', weight: 'fine', color: 'blue',
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
      fiber: 'cotton', weight: 'fine', color: 'red',
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