const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

// configure the cloudinary sdk
cloudinary.config({
  secure: true,
  cloud_name: "doslc34b0",
  api_key: "353116923747894",
  api_secret: "XcT8HcJeNXkXd7FzOSfkAbNjjNA",
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
const uploadMiddleware = multer({ storage: cloudinaryStorage }).single(
  "imageUrl"
);

// export the middleware which uploads and stores the images in cloudinary

module.exports = uploadMiddleware;
