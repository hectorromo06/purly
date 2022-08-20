const { Schema, model } = require('mongoose');

const yarnSchema = new Schema(
    {
        fiber: {
            type: String,
            required: true,
            trim: true
        },
        weight: {
            type: String,
            required: true,
            trim: true
        },
        color: {
            type: String,
            required: true,
            trim: true
        }
    }
);

const Yarn = model('Yarn', yarnSchema);

module.exports = Yarn;