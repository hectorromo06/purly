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
        for: {
            type: String,
            required: true,
            trim: true
        },
        skill: {
            type: String,
            required: true,
            trim: true
        },
        comment: [commentSchema],
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        // yarn: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'Yarn'
        // },
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
        color:  {
            type: String,
            required: true,
            trim: true
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
            type: [String],
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