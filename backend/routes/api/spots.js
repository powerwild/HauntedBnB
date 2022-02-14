const asyncHandler = require('express-async-handler');
const { Sequelize } = require('../../db/models');
const db = require('../../db/models');

const router = require('express').Router();

const { handleValidationErrors } = require('../../utils/validation');
const { check } = require('express-validator');

const validateHauntDetails = [
    check('name')
        .exists({checkFalsy: true})
        .notEmpty()
        .withMessage('Please provide a name.'),
    check('description')
        .exists({checkFalsy: true})
        .notEmpty()
        .withMessage('Please provide a description.'),
    check('address')
        .exists({checkFalsy: true})
        .notEmpty()
        .withMessage('Please provide a address.'),
    check('city')
        .exists({checkFalsy: true})
        .notEmpty()
        .withMessage('Please provide a city.'),
    check('state')
        .exists({checkFalsy: true})
        .notEmpty()
        .withMessage('Please provide a state.'),
    check('country')
        .exists({checkFalsy: true})
        .notEmpty()
        .withMessage('Please provide a country.'),
    check('price')
        .exists({checkFalsy: true})
        .notEmpty()
        .withMessage('Please provide a price.'),
    handleValidationErrors
]

router.route('/')
    .get(asyncHandler(async (req, res) => {
        const spots = await db.Spot.findAll({
            include: {
                model: db.Image
            }
        });
        return res.json(spots);
    }))
    .post(validateHauntDetails ,asyncHandler(async (req, res) => {
        const { name, description, address, city, state, country, price } = req.body;

        const spot = await db.Spot.create({
            userId: req.user.id,
            name,
            description,
            address,
            city,
            state,
            country,
            price
        });
        // const imagesCopy = [];
        // images.forEach(async image => {
        //     await db.Image.create({
        //         spotId: newSpot.id,
        //         url: image
        //     }).then((res) => imagesCopy.push(res))

        // })
        // console.log('***************************', imagesCopy)

        // const newImages = await db.Image.findAll({ where: { spotId: newSpot.id } })
        // console.log(newImages)

        // console.log(spot)
        // console.log(spot.Images)
        return res.json(spot);
    }));



router.route('/:id')
    .get(asyncHandler(async (req, res) => {
        const spotId = req.params.id;
        const spot = await db.Spot.findOne({
            where: { id: +spotId },
            include: { model: db.Review }
        });
        return res.json({ spot });
    }))
    .put(asyncHandler(async (req, res) => {
        const spotId = req.params.id;
        const { name, description, price } = req.body;
        const spot = await db.Spot.findByPk(spotId);
        spot.name = name;
        spot.description = description;
        spot.price = price;

        await spot.save();
        return res.json(spot);
    }))
    .delete(asyncHandler(async (req, res) => {
        const spotId = req.params.id;
        const spot = await db.Spot.findByPk(+spotId);
        await spot.destroy();
        return res.json({ msg: 'Deletion Successful' });
    }));


module.exports = router;
