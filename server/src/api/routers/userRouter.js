const express = require('express');
const router = new express.Router();
const {
    getCurrentUser,
    getAllUsers,
    followUser,
    unFollowUser,
    getUserById
} = require('../controllers/userController');
const {asyncWrapper} = require('../../helpers/helpers');

// I can't get why you need this endpoint where you pass a user with id
// when you have /:id endpoint, to which you can pass current user's id instead and get it that way?
router.get('/', asyncWrapper(getCurrentUser));
// endpoints with collections should be plural, so 'all' is redundant
router.get('/all', asyncWrapper(getAllUsers));
router.get('/:id', asyncWrapper(getUserById));
router.put('/:id', asyncWrapper(followUser));
router.delete('/:id', asyncWrapper(unFollowUser));

module.exports = router;
