const express = require('express');
const router = new express.Router();
const {
  login,
  registration,
} = require('../controllers/authController');
const {asyncWrapper} = require('../../helpers/helpers');
const {validateRegistration} = require('../middlewares/userValidateMiddleware');

router.post('/login', asyncWrapper(login));

router.post(
    '/register',
    asyncWrapper(validateRegistration),
    asyncWrapper(registration),
);

module.exports = router;
