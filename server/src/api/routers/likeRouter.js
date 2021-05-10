const express = require('express');
const router = new express.Router();
const {
    addLike,
    removeLike,
    getUserLikes
} = require('../controllers/likeController');
const {asyncWrapper} = require('../../helpers/helpers');

router.get('/', asyncWrapper(getUserLikes));

router.put('/:id', asyncWrapper(addLike));

router.delete('/:id', asyncWrapper(removeLike));


module.exports = router;
