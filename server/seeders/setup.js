const db = require('../config/connection');
const { YarnCharacteristic, Needle } = require('../models');

// set up materials
db.once('open', async () => {
  await YarnCharacteristic.deleteMany({});
  await Needle.deleteMany({});

  // Create Needle data
  const needleData = [{ size: '2.25mm' }, { size: '2.75mm' }, { size: '3mm' }, { size: '3.25mm' }, { size: '5mm' }, { size: '6mm' }];
  const createdNeedles = await Needle.collection.insertMany(needleData);
  console.log('Created Needles');
  console.log(createdNeedles);

  const fibers = ['acrylic', 'cotton', 'wool'];
  const weights = ['bulky', 'sport', 'fine', 'medium'];
  const colors = ['blue', 'black', 'brown', 'red', 'purple'];

  const yarnCharData = []
  for (let i = 0; i < fibers.length; i++) {
    const yarnChar = { type: "fiber", name: fibers[i] };
    yarnCharData.push(yarnChar);
  }

  for (let j = 0; j < weights.length; j++) {
    const yarnChar = { type: "weight", name: weights[j] };
    yarnCharData.push(yarnChar);
  }

  for (let k = 0; k < colors.length; k++) {
    const yarnChar = { type: "color", name: colors[k] };
    yarnCharData.push(yarnChar);
  }

  const createdYarnCharacteristics = await YarnCharacteristic.collection.insertMany(yarnCharData)
  
  console.log('Created YarnCharacteristics');
  console.log(createdYarnCharacteristics)
  console.log('all done');
  process.exit(0);
});
