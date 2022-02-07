const asyncHandler = require('express-async-handler');
const { Sequelize } = require('../../db/models');
const db = require('../../db/models');

const router = require('express').Router();

router.route('/')
.get( asyncHandler( async (req, res) => {
    const spots = db.Spot.findAll({
        include: {
            model: Image,
            where: {
                spotId: Sequelize.col('spot.id')
            }
        }
    });
    return res.json({spots});
}))
.post();

router.route('/:id')
.get()
.put()
.delete();


module.exports = router;
