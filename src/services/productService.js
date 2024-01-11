const productRepo = require("../repositories/productRepo");
const { BadRequestError } = require("../core/ApiError");

const getAllProducts = async (pageNum, pageSize) =>
  productRepo.getAllProducts((pageNum - 1) * pageSize, pageSize);

const create = async (product) => productRepo.save(product);

const count = async () => productRepo.count();

const findById = async (id) => {
  const product = await productRepo.findByIdWithReviews(id);
  if (!product) {
    throw new BadRequestError("Product not found!");
  }
  return product;
};

const deleteProduct = async (id) => await productRepo.deleteProduct(id);

const updateProduct = async (id, patchObj) =>
  await productRepo.patchProduct(id, patchObj);

module.exports = {
  create,
  getAllProducts,
  count,
  findById,
  deleteProduct,
  updateProduct,
};
