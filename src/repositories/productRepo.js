const Product = require('../models/Product');

const getAllProducts = () => Product.find({});

const priceasc = () => Product.find({}).sort("price : 1");
const pricedsc = () => Product.find({}).sort("price : 1");


const save = (product) => {
    const newProduct = new Product(product);
    return newProduct.save();
};

const findById = (id) => Product.findById(id);

const findByIdWithReviews = (id) => Product.findById(id)
    .populate('reviews');

module.exports = {
    save,
    getAllProducts,
    findById,
    findByIdWithReviews,
    priceasc,
    pricedsc,
};
