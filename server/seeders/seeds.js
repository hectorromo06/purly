const faker = require('faker');
const db = require('../config/connection');
const { User, Pattern} = require('../models');

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
  const patternData = [
    {
      name: 'Dragon',
      username: 'alesmonde0',
      project: 'scarf',
      for: 'children',
      skill: 'beginner',
      
    }
  ]
})