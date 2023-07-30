const productRepo = require('../repositories/productRepo');

const getAllProducts = async () => productRepo.getAllProducts();

const create = async (product) => productRepo.save(product);

const findById = async (id) => productRepo.findByIdWithReviews(id);

module.exports = {
    create,
    getAllProducts,
    findById,
};
