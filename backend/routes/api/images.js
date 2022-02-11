const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

const router = require('express').Router();





router.route('/')
.get(asyncHandler(async(req, res) => {
    const { spotId } = req.body;
    const images = await db.Image.findAll({where: {spotId}})
    return res.json(images);
}))
.post(asyncHandler(async (req, res) => {
    const { imagesArr, spotId } = req.body;

    imagesArr.forEach(async url => {
        await db.Image.create({
            spotId,
            url
        })
    });
    return res.status(200);
}))
.delete(asyncHandler(async (req, res) => {
    const { id } = req.body;
    const image = db.Image.findByPk(id);
    await image.destroy();
    return res.json({msg: 'Image Deleted'});
}));


module.exports = router;
