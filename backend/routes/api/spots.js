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
    return res.json({spots});
}))
.post( asyncHandler( async (req, res) => {
    const { userId, name, description, address, city, state, country, price, images} = req.body;
    const newSpot = await db.Spot.create({
        userId,
        name,
        description,
        address,
        city,
        state,
        country,
        price
    });

    asyncHandler(images.forEach(async image => {
        await db.Image.create({
            spotId: newSpot.id,
            url: image
        })
    }))
    const spotImages = await db.Image.findAll({where: {spotId: newSpot.id}})

    res.json({newSpot, spotImages});
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
    const { userId, name, description, address, city, state, country, price} = req.body;
    const spot = await db.Spot.findByPk(spotId);
    spot.userId = userId;
    spot.name = name;
    spot.description = description;
    spot.address =address;
    spot.city = city;
    spot.state = state;
    spot.country = country;
    spot.price = price;

    await spot.save();
    res.json({spot});
}))
.delete(asyncHandler( async (req, res) => {
    const spotId = req.params.id;
    const spot = await db.Spot.findByPk(+spotId);
    await spot.destroy();
    res.json({msg: 'Deletion Successful'});
}));


module.exports = router;
