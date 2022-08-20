const { Schema, model } = require('mongoose');

const yarnCharacteristicSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    }
  }
);

const YarnCharacteristic = model('YarnCharacteristic', yarnCharacteristicSchema);

module.exports = YarnCharacteristic;