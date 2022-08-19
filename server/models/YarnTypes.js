const { Schema, model } = require('mongoose');

const yarnTypesSchema = new Schema(
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

const YarnTypes = model('YarnTypes', yarnTypesSchema);
  
module.exports = YarnTypes;