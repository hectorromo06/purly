const db = require('../config/connection');
const { YarnAttributes, Needle } = require('../models');

// set up materials
db.once('open', async () => {
  await YarnAttributes.deleteMany({});
  await Needle.deleteMany({});

  // Create Needle data
  const needleData = [{ size: '2.25mm' }, { size: '2.75mm' }, { size: '3mm' }, { size: '3.25mm' }, { size: '5mm' }, { size: '6mm' }];
  const createdNeedles = await Needle.collection.insertMany(needleData);
  console.log('Created Needles');
  console.log(createdNeedles);

  const fibers = ['acrylic', 'cotton', 'wool'];
  const weights = ['bulky', 'sport', 'fine', 'medium'];
  const colors = ['blue', 'black', 'brown', 'red', 'purple'];

  // Create Yarn Data
  const yarnAttributesData = { fibers, weights, colors };
  
  const createdYarnAttributes = await YarnAttributes.create(yarnAttributesData);
  console.log('Created Yarn');
  console.log(createdYarnAttributes)
  console.log('all done');
  process.exit(0);
});
