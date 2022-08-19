const { Schema, model } = require('mongoose');

const yarnAttributesSchema = new Schema(
  {
    fibers: {
      type: [String],
      required: true,
      trim: true
    },
    weights: {
      type: [String],
      required: true,
      trim: true
    },
    colors: {
      type: [String],
      required: true,
      trim: true
    }
  }
);

const YarnAttributes = model('YarnAttributes', yarnAttributesSchema);
  
module.exports = YarnAttributes;