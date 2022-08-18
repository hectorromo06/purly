const { Schema, model } = require('mongoose');
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
        comment: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ],
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        yarn: {
            type: Schema.Types.ObjectId,
            ref: 'Yarn'
        },
        yarn: {
            type: Schema.Types.ObjectId,
            ref: 'needle'
        },

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