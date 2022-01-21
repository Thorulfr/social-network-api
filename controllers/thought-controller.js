// Imports
const { Thought, User } = require('../models');

const thoughtController = {
    // Get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => {
                console.error(err);
                res.status(400).json(err);
            });
    },
    // Get one thought by ID
    getThoughtByID({ params }, res) {
        Thought.findOne({ _id: params.id })
            .then((dbThoughtData) => {
                // If no thought is found, send a 404
                if (!dbThoughtData) {
                    res.status(404).json({
                        message: 'No thought found with this id!',
                    });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // Create a new thought (and push to creator's profile)
    createThought({ body }, res) {
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: body.userId },
                    { $push: { thoughts: _id } },
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
            })
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => res.status(400).json(err));
    },
    // Update a thought by ID
    // Delete a thought by ID
    // Add a reaction to a thought by ID
    // Delete a reaction to a thought by ID
};

module.exports = thoughtController;
