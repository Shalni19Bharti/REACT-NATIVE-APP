const { signup, login } = require('../Controllers/controller');
const { signupValidation, loginValidation } = require('../Middlewares/validation');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;