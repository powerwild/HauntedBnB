const asyncHandler = require('express-async-handler');
const db = require('../../../backend/db/models');

const router = require('express').Router();

router.get('/:search', asyncHandler( async (req, res) => {
    const search = req.params.search;

    const haunts = await db.Spot.findAll({
        where: {
            [db.Sequelize.Op.or]: [
                {
                    city: {
                        [db.Sequelize.Op.iLike]: `%${search}%`,
                    },
                },
                {
                    state: {
                        [db.Sequelize.Op.iLike]: `%${search}%`,
                    },
                },
                {
                    country: {
                        [db.Sequelize.Op.iLike]: `%${search}%`,
                    },
                }
            ],
        },
        include: {
            model: db.Image
        }
    });
    res.json(haunts);

}))



module.exports = router;
