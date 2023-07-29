const Product = require('../models/Product');
const Review = require('../models/Review');

const getAllProducts = () => Product.find({});

const save = (product) => {
    const newProduct = new Product(product);
    return newProduct.save();
};

const findById = (id) => Product.findById(id);


const deleteProductAndReviews = (productId) => {
  
       Product.findByIdAndDelete(productId);
  
       Review.deleteMany({ productId: productId });

  };

const findByIdWithReviews = (id) => Product.findById(id)
    .populate('reviews');


module.exports = {
    save,
    getAllProducts,
    findById,
    findByIdWithReviews,
    deleteProductAndReviews
};
