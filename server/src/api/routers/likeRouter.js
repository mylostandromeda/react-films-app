const express = require('express');
const router = new express.Router();
const {authMiddleware} = require('../middlewares/authMiddleware');
const {
    addLike,
    removeLike,
    getUserLikes
} = require('../controllers/likeController');
const {asyncWrapper} = require('../../helpers/helpers');

router.get('/', authMiddleware, asyncWrapper(getUserLikes));

router.put('/:id', authMiddleware, asyncWrapper(addLike));

router.delete('/:id', authMiddleware, asyncWrapper(removeLike));


module.exports = router;
