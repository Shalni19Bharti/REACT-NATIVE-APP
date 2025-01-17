// const { signup ,login } = require('../Controller/controller');
// const { registerValidation, loginValidation } = require('../Middleware/validation');

// const router = require('express').Router();

// router.post("/login" , loginValidation , login);
// router.post("/signup" , registerValidation , signup );

// module.exports = router ;

const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;