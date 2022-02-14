const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const router = require('express').Router();
const { handleValidationErrors } = require('../../utils/validation');
const { check } = require('express-validator');


const validateImageArr = [
    check('imagesArr')
        .exists({checkFalsy: true})
        .withMessage('Please provide a url address for your picture.'),
    handleValidationErrors
]




router.route('/')
.post(validateImageArr, asyncHandler(async (req, res) => {
    const { imagesArr, spotId } = req.body;

    // imagesArr.forEach( url => {
    //     await db.Image.create({
    //         spotId,
    //         url
    //     })
    // });
    for (let i = 0; i < imagesArr.length; i++) {
        if (imagesArr){
            await db.Image.create({
            spotId,
            url: imagesArr[i]
        })}
    }

    const images = await db.Image.findAll({where: {spotId}})
    if (images.length < 1) return res.json()

    return res.json(images);
}))
.delete(asyncHandler(async (req, res) => {
    const data = req.body;
    const image = await db.Image.findByPk(data.imageId);
    image.destroy();
    return res.json({msg: 'Image Deleted'});
}));


// router.route('/:id')
//     .get(asyncHandler(async(req, res) => {
//     const id = req.params.id;
//     const images = await db.Image.findAll({where: {spotId: +id}})
//     return res.json(images);
// }))

module.exports = router;
