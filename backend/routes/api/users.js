const asyncHandler = require('express-async-handler');
const { User } = require('../../db/models');
const { setTokenCookie } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = require('express').Router();

const validateSignup = [
    check('username')
        .exists({checkFalsy: true})
        .isLength({min: 4, max: 30})
        .withMessage('Please provide a username between 4 and 30 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('email')
        .exists({checkFalsy: true})
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('password')
        .exists({checkFalsy: true})
        .isLength({min: 6})
        .withMessage('Pasword must be at least 6 characters or more.'),
    handleValidationErrors
]

router.route('/')

.post(validateSignup, asyncHandler( async (req, res, next) => {
    const { username, email, password } = req.body;
    let user;
    try{
        user = await User.signup({ username, email, password});
    } catch (e) {
        return next(e)
    }
    await setTokenCookie(res, user);
    return res.json({user});
}));




router.route('/demo')
.get(asyncHandler( async(req, res) => {
    const user = await User.login({credential: 'DemoUser', password: 'password'});
    setTokenCookie(res, user);
    return res.json({user})
}))



module.exports = router;
