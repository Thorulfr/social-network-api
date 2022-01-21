// Imports
const { User } = require('../models');

const userController = {
    // Get all users
    getAllUsers(req, res) {
        User.find({})
            .populate({
                path: 'friends',
                select: '-__v',
            })
            .populate({
                path: 'thoughts',
                select: '-__v',
            })
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => {
                console.error(err);
                res.status(400).json(err);
            });
    },
    // Get one user by ID with thought/friend data
    getUserByID({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'friends',
                select: '-__v',
            })
            .populate({
                path: 'thoughts',
                select: '-__v',
            })
            .select('-__v')
            .then((dbUserData) => {
                // If no user is found, send a 404
                if (!dbUserData) {
                    res.status(404).json({
                        message: 'No user found with this id!',
                    });
                    return;
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // Create a new user
    createUser({ body }, res) {
        User.create(body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(400).json(err));
    },
    // Update a user by ID
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, {
            new: true,
            runValidators: true,
        })
            .then((dbUserData) => {
                // If no user is found, send a 404
                if (!dbUserData) {
                    res.status(404).json({
                        message: 'No user found with this id!',
                    });
                    return;
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // Delete a user by ID
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then((dbUserData) => {
                // If no user is found, send a 404
                if (!dbUserData) {
                    res.status(404).json({
                        message: 'No user found with this id!',
                    });
                    return;
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
        // Bonus: Delete associated thoughts on user deletion
    },
    // Add a friend to a user's friend list using both IDs
    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            { $push: { friends: params.friendId } },
            { new: true }
        )
            .then((dbUserData) => {
                // If no user is found, send a 404
                if (!dbUserData) {
                    res.status(404).json({
                        message: 'No user found with this id!',
                    });
                    return;
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // Delete a friend from a user's friend list using both IDs
    deleteFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
            .then((dbUserData) => {
                // If no user is found, send a 404
                if (!dbUserData) {
                    res.status(404).json({
                        message: 'No user found with this id!',
                    });
                    return;
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
};

module.exports = userController;
