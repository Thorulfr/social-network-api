// Imports
const router = require('express').Router();
const {
    getAllUsers,
    getUserByID,
    createUser,
} = require('../../controllers/user-controller');

// /api/users
// Get all users, create a user
router.route('/').get(getAllUsers).post(createUser);

// /api/users/id
// Get one user
router.route('/:id').get(getUserByID);

module.exports = router;
