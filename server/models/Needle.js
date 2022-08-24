const { Schema, model } = require('mongoose');

const needleSchema = new Schema(
    {
        size: {
            type: String,
            required: true,
            trim: true
        }
    }
);

const Needle = model('Needle', needleSchema);

module.exports = Needle;

