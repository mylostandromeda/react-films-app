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

router.get('/', asyncWrapper(getCurrentUser));
router.get('/all', asyncWrapper(getAllUsers));
router.get('/:id', asyncWrapper(getUserById));
router.put('/:id', asyncWrapper(followUser));
router.delete('/:id', asyncWrapper(unFollowUser));

module.exports = router;
