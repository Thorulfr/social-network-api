// Imports
const { Schema, model, Types } = require('mongoose');

// Schema to regulate reactions
const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: 'string',
            required: [true, 'Text is required!'],
            maxLength: [280, 'Your reaction must be 280 characters or fewer!'],
        },
        username: {
            type: 'string',
            required: [true, 'Username is required!'],
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // Date formatter will go here
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

// Schema to regulate thought data
const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: 'string',
            required: [true, 'Text is required!'],
            maxLength: [280, 'Your thought must be 280 characters or fewer!'],
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // Date formatter will go here
        },
        username: {
            type: 'string',
            required: [true, 'Username is required!'],
        },
        userId: {
            type: 'string',
            required: [true, 'User ID is required!'],
        },
        reactions: [ReactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

// Get total number of reactions
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// Create thought model using schema
const Thought = model('Thought', ThoughtSchema);

// Exports
module.exports = Thought;
