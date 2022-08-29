const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');

const dateFormat = require('../utils/dateFormat');

const patternSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        username: {
            type: String,
            required: true,
            trim: true
        },
        project: {
            type: String,
            required: true,
            trim: true
        },
        madeFor: {
            type: String,
            required: true,
            trim: true
        },
        skill: {
            type: String,
            required: true,
            trim: true
        },
        comments: [commentSchema],
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        fiber: {
            type: Schema.Types.ObjectId,
            ref: 'YarnCharacteristic'
        },
        weight: {
            type: Schema.Types.ObjectId,
            ref: 'YarnCharacteristic'
        },
        color:  {
            type: Schema.Types.ObjectId,
            ref: 'YarnCharacteristic'
        },
        needle: {
            type: Schema.Types.ObjectId,
            ref: 'Needle'
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        instructions: {
            type: String,
            required: true,
            trim: true
        }

    },
    {
        toJSON: {
            getters: true
        }
    }
);

patternSchema.virtual('commentCount').get(function() {
    return this.comment.length;
  });

const Pattern = model('Pattern', patternSchema);

module.exports = Pattern;