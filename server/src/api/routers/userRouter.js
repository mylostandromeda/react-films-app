const express = require('express');
const router = new express.Router();
const {authMiddleware} = require('../middlewares/authMiddleware');
const {
    getCurrentUser,
    getAllUsers,
    followUser,
    unFollowUser,
    getUserById
} = require('../controllers/userController');
const {asyncWrapper} = require('../../helpers/helpers');

router.get('/', authMiddleware, asyncWrapper(getCurrentUser));
router.get('/all', authMiddleware, asyncWrapper(getAllUsers));
router.get('/:id', authMiddleware, asyncWrapper(getUserById));
router.put('/:id', authMiddleware, asyncWrapper(followUser));
router.delete('/:id', authMiddleware, asyncWrapper(unFollowUser));

module.exports = router;
