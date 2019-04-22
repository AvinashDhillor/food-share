const express = require('express');

const Food = require('../../db/models/food');
const multer = require('../../middleware/multerUpload');
const cloudnary = require('../../config/cloudnaryConfig');

const router = express.Router();

router.get('/new', (req, res) => {
  const file = multer.dataUri(req).content;
  cloudnary.uploader.upload(file).then(result => {
    console.log(result);
  });
  let data = {
    imageUrl: 'http.goog.ec.com',
    name: 'panir ki sabji',
    location: { lat: 23, lon: 34 },
    phoneNo: '342323',
    des: 'jenjrehbegrvgvrgevrgevrgwe'
  };
  let food = new Food(data);
  food.save().then(result => {
    res.send(result);
  });
});

module.exports = router;
