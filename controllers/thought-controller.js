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
    // Create a new thought (and push to creator's profile)
    // Update a thought by ID
    // Delete a thought by ID
    // Add a reaction to a thought by ID
    // Delete a reaction to a thought by ID
};

module.exports = thoughtController;
