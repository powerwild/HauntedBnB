const asyncHandler = require('express-async-handler');
const { Sequelize } = require('../../db/models');
const db = require('../../db/models');

const router = require('express').Router();

router.route('/')
.get( asyncHandler( async (req, res) => {
    const spots = await db.Spot.findAll({
        include: {
            model: db.Image
        }
    });
    return res.json(spots);
}))
.post( asyncHandler( async (req, res) => {
    const { name, description, address, city, state, country, price, images} = req.body;

    const newSpot = await db.Spot.create({
        userId: req.user.id,
        name,
        description,
        address,
        city,
        state,
        country,
        price
    });

    images.forEach(async image => {
        await db.Image.create({
            spotId: newSpot.id,
            url: image
        })
    })
    const spot = await db.Spot.findOne({
        where: {userId: req.user.id },
        include: {
            model: db.Image
        }
    });
    return res.json(spot);
}));

router.route('/:id')
.get( asyncHandler(async (req, res) => {
    const spotId = req.params.id;
    const spot = await db.Spot.findOne({
        where: {id: +spotId},
        include: {model: db.Review}
    });
    res.json({spot});
}))
.put( asyncHandler(async (req, res) => {
    const spotId = req.params.id;
    const { name, description, price} = req.body;
    const spot = await db.Spot.findByPk(spotId);
    spot.name = name;
    spot.description = description;
    spot.price = price;

    await spot.save();
    res.json(spot);
}))
.delete(asyncHandler( async (req, res) => {
    const spotId = req.params.id;
    const spot = await db.Spot.findByPk(+spotId);
    await spot.destroy();
    res.json({msg: 'Deletion Successful'});
}));


module.exports = router;
