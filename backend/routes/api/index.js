const sessionRouter = require('./session');
const userRouter = require('./users');
const spotRouter = require('./spots');
const bookingRouter = require('./booking');
const reviewRouter = require('./review');
const messageRouter = require('./message');
const { requireAuth } = require('../../utils/auth');
const imageRouter = require('./images');

const router = require('express').Router();



router.use('/session', sessionRouter);
router.use('/users', userRouter);

router.use(requireAuth);

router.use('/spots', spotRouter);
router.use('/bookings', bookingRouter);
router.use('/reviews', reviewRouter);
router.use('/messages', messageRouter);
router.use('/images', imageRouter);



module.exports = router;
