const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

const router = require('express').Router();





router.route('/')
.post(asyncHandler(async (req, res) => {
    const { imagesArr, spotId } = req.body;

    // imagesArr.forEach( url => {
    //     await db.Image.create({
    //         spotId,
    //         url
    //     })
    // });
    for (let i = 0; i < imagesArr.length; i++) {
        await db.Image.create({
            spotId,
            url: imagesArr[i]
        })
    }

    const images = await db.Image.findAll({where: {spotId}})
    console.log(images)

    return res.json(images);
}))
.delete(asyncHandler(async (req, res) => {
    const { id } = req.body;
    const image = db.Image.findByPk(id);
    await image.destroy();
    return res.json({msg: 'Image Deleted'});
}));


// router.route('/:id')
//     .get(asyncHandler(async(req, res) => {
//     const id = req.params.id;
//     const images = await db.Image.findAll({where: {spotId: +id}})
//     return res.json(images);
// }))

module.exports = router;
