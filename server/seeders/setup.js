const db = require('../config/connection');
const { Yarn, Needle } = require('../models');

// set up materials
db.once('open', async () => {
  await Yarn.deleteMany({});
  await Needle.deleteMany({});

  // Create Needle data
  const needleData = [{ size: '2.25mm' }, { size: '2.75mm' }, { size: '3mm' }, { size: '3.25mm' }, { size: '5mm' }, { size: '6mm' }];
  const createdNeedles = await Needle.collection.insertMany(needleData);
  console.log('Created Needles');
  console.log(createdNeedles);
  
  // Create Yarn Data
  const yarnData = [];

  const fibers = ['acrylic', 'cotton', 'wool'];
  const weights = ['bulky', 'sport', 'fine', 'medium'];
  const colors = ['blue', 'black', 'brown', 'red', 'purple'];

  for (let i = 0; i < fibers.length; i++) {
    const fiber = fibers[i];
    for (let j = 0; j < weights.length; j++) {
      const weight = weights[j];
      for (let k = 0; k < colors.length; k++) {
        const color = colors[k];
        yarnData.push({ fiber, weight, color });
      }
    }
  }
  
  const createdYarn = await Yarn.collection.insertMany(yarnData);
  console.log('Created Yarn');
  console.log(createdYarn)
  console.log('all done');
  process.exit(0);
});
