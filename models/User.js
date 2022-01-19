// Imports
const { Schema, model, Types } = require('mongoose');
const validator = require('validator');

// Schema to regulate user data
const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: [true, 'That username is already in use!'],
            required: [true, 'A username is required!'],
            trim: true,
        },
        email: {
            type: String,
            unique: [true, 'That email is already in use!'],
            required: [true, 'An email address is required!'],
            validate: [
                validator.isEmail,
                'Please enter a valid email address!',
            ],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

// Get total number of user's friends
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// Create user model using schema
const User = model('User', UserSchema);

// Exports
module.exports = User;
