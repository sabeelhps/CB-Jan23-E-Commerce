const productRepo = require('../repositories/productRepo');

const getAllProducts = async () => productRepo.getAllProducts();
const priceasc = async () => productRepo.priceasc();
const pricedsc = async () => productRepo.pricedsc();

const create = async (product) => productRepo.save(product);

const findById = async (id) => productRepo.findByIdWithReviews(id);

module.exports = {
    create,
    getAllProducts,
    findById,
    priceasc,
    pricedsc,
};
