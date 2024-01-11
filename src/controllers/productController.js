const productService = require("../services/productService");
const Logger = require("../core/Logger");

const getAllProducts = async (req, res) => {
  const currPage = +req.query.pageNum;
  const pageSize = +req.query.pageSize;
  let totalProducts = await productService.count();
  const products = await productService.getAllProducts(currPage, pageSize);
  res.render("products/index", {
    products: products,
    currPage: currPage,
    pageSize: pageSize,
    totalProducts: totalProducts,
    hasNext: currPage * pageSize < totalProducts,
    hasPrevious: currPage != 1,
  });
};

const create = async (req, res) => {
  Logger.info("Entry in create product");
  const product = {
    name: req.body.name,
    price: req.body.price,
    desc: req.body.desc,
    imageUrl: req.file.path,
    quantity: req.body.quantity,
    rating: req.body.rating,
    author: req.user._id,
  };

  await productService.create(product);
  res.redirect("/api/v1/products");
};

const editProduct = async (req, res) => {
  const productId = req.params.id;
  const patchObj = req.body;
  if (req.file) {
    // user has uploaded a new picture for the product
    patchObj.imageUrl = req.file.path;
  }
  productService.updateProduct(productId, patchObj);
  res.redirect(`/api/v1/products/${productId}`);
};

const showAddProductForm = (req, res) => {
  res.render("products/productForm", { title: "Add Product", editing: false });
};

const showEditProductForm = async (req, res) => {
  const productId = req.params.id;
  const product = await productService.findById(productId);
  res.render("products/productForm", {
    title: "Edit Product",
    editing: true,
    product: product,
  });
};

const findById = async (req, res) => {
  Logger.info("Entry in show product");
  const { id } = req.params;
  const product = await productService.findById(id);
  res.render("products/show", { product });
};

const deleteProduct = async (req, res) => {
  Logger.info("Entry in delete product");
  const { id } = req.params;
  await productService.deleteProduct(id);
  req.flash("success", "Delete the product successfully");
  res.redirect("/api/v1/products");
};

module.exports = {
  getAllProducts,
  create,
  editProduct,
  findById,
  showAddProductForm,
  showEditProductForm,
  deleteProduct,
};
