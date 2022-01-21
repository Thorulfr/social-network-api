// Imports
const router = require('express').Router();
const {
    getAllUsers,
    getUserByID,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/user-controller');

// /api/users
// Get all users, create a user
router.route('/').get(getAllUsers).post(createUser);

// /api/users/id
// Get one user, update a user, delete a user
router.route('/:id').get(getUserByID).put(updateUser).delete(deleteUser);

// /api/users/id/friendId
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);
module.exports = router;
