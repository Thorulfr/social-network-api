// Imports
const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtByID,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thought-controller');

// /api/thoughts
// Get all thoughts, create a thought
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:id
// Get one thought, update a thought, delete a thought
router
    .route('/:id')
    .get(getThoughtByID)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
// Add a reaction
router.route('/thoughts/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
// Delete a reaction
router
    .route('/thoughts/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;
