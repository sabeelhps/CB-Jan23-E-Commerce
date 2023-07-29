const express = require('express');
const router = express.Router();
const productController = require('../../controllers/productController');
router.get('/', productController.getAllProducts);

router.post('/',productController.create);

router.delete('/:id', productController.deleteProduct);

router.get('/new',productController.showNewForm);

router.get('/:id', productController.findById);

module.exports = router;
