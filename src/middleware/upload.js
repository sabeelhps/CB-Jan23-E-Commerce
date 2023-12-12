const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const {
  cloudinaryEnv,
  cloudinaryApiKey,
  cloudinaryApiSecret,
} = require("../configs/cloudinary");
const multer = require("multer");

// configure the cloudinary sdk
cloudinary.config({
  secure: true,
  cloud_name: cloudinaryEnv,
  api_key: cloudinaryApiKey,
  api_secret: cloudinaryApiSecret,
});

// define a storage layer using CloudinaryStorate constructor
const cloudinaryStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "cb-ecommerce",
  },
});

// pass and use the storage layer in multer.
// create a middleware instance from multer constuctor
const uploadImage = multer({ storage: cloudinaryStorage }).single("imageUrl");

// export the middleware which uploads and stores the images in cloudinary

module.exports = uploadImage;
