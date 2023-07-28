const express = require('express');

const router = express.Router();
const productController = require('../../controllers/productController');

const cloudinary = require("../../utils/cloudinary");
const upload = require("../../utils/multer");
  
router.get('/', productController.getAllProducts);

router.post('/',upload.single("imageUrl"), productController.create);


router.get('/new', productController.addProduct);

router.get('/:id', productController.findById);

module.exports = router;
