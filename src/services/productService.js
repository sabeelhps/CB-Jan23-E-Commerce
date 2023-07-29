const productRepo = require('../repositories/productRepo');
const Product = require('../models/products'); 
const Review = require('../models/reviews');

const getAllProducts = async () => productRepo.getAllProducts();

const create = async (product) => productRepo.save(product);

const findById = async (id) => productRepo.findByIdWithReviews(id);

const deleteProductAndReviews = async (productId) => productRepo.deleteProductAndReviews(productId);


module.exports = {
    create,
    getAllProducts,
    findById,
    deleteProductAndReviews
};
