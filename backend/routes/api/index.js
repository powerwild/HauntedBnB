const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const sessionRouter = require('./session');
const userRouter = require('./users');

const router = require('express').Router();



router.use('/session', sessionRouter);
router.use('/users', userRouter);



module.exports = router;
