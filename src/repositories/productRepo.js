const Product = require("../models/Product");

const getAllProducts = (offset, lim) =>
  Product.find({}).skip(offset).limit(lim);

const save = (product) => {
  const newProduct = new Product(product);
  return newProduct.save();
};

const count = () => Product.count();

const findById = (id) => Product.findById(id);

const findByIdWithReviews = (id) => Product.findById(id).populate("reviews");

const deleteProduct = (id) => {
  findById(id).then((doc) => doc.deleteOne());
};

const patchProduct = (id, patchObj) =>
  Product.findByIdAndUpdate(id, patchObj, { new: true });

module.exports = {
  save,
  getAllProducts,
  count,
  findById,
  findByIdWithReviews,
  deleteProduct,
  patchProduct,
};
