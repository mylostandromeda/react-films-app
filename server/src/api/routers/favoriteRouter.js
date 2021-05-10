const express = require('express');
const router = new express.Router();
const {
    addFavorite,
    removeFavorite,
    getUserFavorites
} = require('../controllers/favoriteController');
const {asyncWrapper} = require('../../helpers/helpers');

router.get('/', asyncWrapper(getUserFavorites));

router.put('/:id', asyncWrapper(addFavorite));

router.delete('/:id', asyncWrapper(removeFavorite));


module.exports = router;
