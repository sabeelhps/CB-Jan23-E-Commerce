const express = require('express');

const router = express.Router();
const productController = require('../../controllers/productController');
const catchAsync = require('../../core/catchAsync');
const { isAdminOrSeller, isProductAuthor } = require('../../middleware/auth');

router.get('/', catchAsync(productController.getAllProducts));

router.get('/new', isAdminOrSeller, productController.showNewForm);

router.post('/', isAdminOrSeller, catchAsync(productController.create));

router.get('/:id', catchAsync(productController.findById));

router.delete('/:id', isProductAuthor, catchAsync(productController.deleteProduct));

module.exports = router;
