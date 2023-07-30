const express = require('express');

const router = express.Router();
const productRoutes = require('./productRoutes');
const reviewRoutes = require('./reviewRoutes');

router.use('/products', productRoutes);
router.use('/products', reviewRoutes);

module.exports = router;
