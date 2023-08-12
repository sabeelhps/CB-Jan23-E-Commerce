const express = require('express');
const router = express.Router();
const productController = require('../../controllers/productController');
const catchAsync = require('../../core/catchAsync');
const isLoggedIn = require('../../middleware/auth');

router.get('/', catchAsync(productController.getAllProducts));

router.post('/', isLoggedIn , catchAsync(productController.create));

router.get('/new', isLoggedIn, productController.showNewForm);

router.get('/:id', catchAsync(productController.findById));

module.exports = router;
