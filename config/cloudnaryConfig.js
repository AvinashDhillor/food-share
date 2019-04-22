const cloud = require('cloudinary');

const cloudinaryConfig = next => {
  cloud.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });
  next(err, true);
};

const uploader = cloud.uploader;
module.export = { cloudinaryConfig, uploader };
