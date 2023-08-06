const productRepo = require('../repositories/productRepo');
const { BadRequestError } = require('../core/ApiError');

const getAllProducts = async () => productRepo.getAllProducts();
const priceasc = async () => productRepo.priceasc();
const pricedsc = async () => productRepo.pricedsc();

const create = async (product) => productRepo.save(product);

const findById = async (id) => {
    const product = await productRepo.findByIdWithReviews(id);
    if (!product) {
        throw new BadRequestError('Product not found!');
    }
    return product;
};

module.exports = {
    create,
    getAllProducts,
    findById,
    priceasc,
    pricedsc,
};
