const asyncHandler = require('express-async-handler');
const db = require('../../../backend/db/models');

const router = require('express').Router();



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
        const oldReview = await db.Review.findbyPk(newReview.id);
        oldReview.review = newReview.review;
        await oldReview.save();
        return res.status(200)
    }))
    .post(asyncHandler(async (req, res) => {
        const { userId, spotId, review } = req.body;
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
        return res.status(200);
    }));

router.route('/:id')
    .get(asyncHandler(async (req, res) => {
        const { id } = req.params;
        const reviews = await db.Review.findAll({
            where: {spotId: +id}
        })
        return res.json(reviews);
    }))


module.exports = router;
