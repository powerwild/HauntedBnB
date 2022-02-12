const sessionRouter = require('./session');
const userRouter = require('./users');
const spotRouter = require('./spots');
const reviewRouter = require('./review');
const { requireAuth } = require('../../utils/auth');
const imageRouter = require('./images');

const router = require('express').Router();



router.use('/session', sessionRouter);
router.use('/users', userRouter);

router.use(requireAuth);

router.use('/spots', spotRouter);

router.use('/reviews', reviewRouter);

router.use('/images', imageRouter);



module.exports = router;
