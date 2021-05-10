const express = require('express');
const router = new express.Router();
const {authMiddleware} = require('../middlewares/authMiddleware');
const {
    getFilms,
    getFilmById
} = require('../controllers/filmsController');
const {asyncWrapper} = require('../../helpers/helpers');

router.get('/', authMiddleware, asyncWrapper(getFilms));

router.get('/:id', authMiddleware, asyncWrapper(getFilmById));

module.exports = router;
