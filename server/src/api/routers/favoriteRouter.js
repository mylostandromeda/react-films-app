const express = require('express');
const router = new express.Router();
const {authMiddleware} = require('../middlewares/authMiddleware');
const {
    addFavorite,
    removeFavorite,
    getUserFavorites
} = require('../controllers/favoriteController');
const {asyncWrapper} = require('../../helpers/helpers');

router.get('/', authMiddleware, asyncWrapper(getUserFavorites));

router.put('/:id', authMiddleware, asyncWrapper(addFavorite));

router.delete('/:id', authMiddleware, asyncWrapper(removeFavorite));


module.exports = router;
