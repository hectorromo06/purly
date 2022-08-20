const db = require('../config/connection');
const { YarnTypes, Needle } = require('../models');

// set up materials
db.once('open', async () => {
  await YarnTypes.deleteMany({});
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
  const yarnTypesData = { fibers, weights, colors };
  
  const createdYarnTypes = await YarnTypes.create(yarnTypesData);
  
  console.log('Created YarnTypes');
  console.log(createdYarnTypes)
  console.log('all done');
  process.exit(0);
});
