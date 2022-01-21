// Imports
const { User } = require('../models');

const userController = {
    // Get all users
    getAllUsers(req, res) {
        User.find({})
            .select('__v')
            .sort({ _id: -1 })
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => {
                console.error(err);
                res.status(400).json(err);
            });
    },
    // Get one user by ID with thought/friend data
    // Create a new user
    // Update a user by ID
    // Delete a user by ID
    // Bonus: Delete associated thoughts on user deletion
    // Add a friend to a user's friend list using both IDs
    // Delete a friend from a user's friend list using both IDs
};

module.exports = userController;
