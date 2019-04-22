const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('./db/connect');
const food = require('./routes/api/food');
const cloudinary = require('./config/cloudnaryConfig');
const multer = require('./middleware/multerUpload');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cloudinary.cloudinaryConfig());
app.use(multer.multerUploads());
app.use('/api/food', food);

app.listen(PORT, err => {
  if (err) {
    console.log('Error in running server');
  } else {
    console.log(`Server is up on port ${PORT}`);
  }
});
