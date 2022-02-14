const asyncHandler = require('express-async-handler');
const db = require('../../../backend/db/models');

const router = require('express').Router();

const { handleValidationErrors } = require('../../utils/validation');
const { check } = require('express-validator');
const validateReview = [
    check('spotId')
        .exists({checkFalsy: true})
        .notEmpty()
        .withMessage('Sorry there was an error. Please try again.'),
    check('review')
        .exists({checkFalsy: true})
        .withMessage('Please provide a review.'),
    handleValidationErrors
]


router.route('/')
    .get(asyncHandler(async (req, res) => {
        const myReviews = await db.Review.findAll({
            where: {userId: req.user.id},
            include: {model: db.Spot}
        })
        return res.json(myReviews)
    }))
    .put(asyncHandler(async (req, res) => {
        const newReview = req.body;
        const oldReview = await db.Review.findByPk(newReview.id);
        oldReview.review = newReview.review;
        await oldReview.save();
        return res.json(oldReview);
    }))
    .post(asyncHandler(async (req, res) => {
        const {userId, spotId, review} = req.body;

        const newReview = await db.Review.create({
            userId,
            spotId,
            review
        })
        return res.json(newReview);
    }))
    .delete(asyncHandler(async (req, res) => {
        const badReview = await db.Review.findByPk(req.body.id);
        await badReview.destroy();
        return res.json({msg: 'Success'});
    }));

router.route('/:spotId')
    .get(asyncHandler(async (req, res) => {
        const { spotId } = req.params;
        const reviews = await db.Review.findAll({
            where: {spotId: +spotId}
        })

        return res.json(reviews);
    }))


module.exports = router;
