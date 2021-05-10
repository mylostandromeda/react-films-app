const express = require('express');
const router = new express.Router();
const {
    getFilms,
    getFilmById
} = require('../controllers/filmsController');
const {asyncWrapper} = require('../../helpers/helpers');

router.get('/', asyncWrapper(getFilms));

router.get('/:id', asyncWrapper(getFilmById));

module.exports = router;
