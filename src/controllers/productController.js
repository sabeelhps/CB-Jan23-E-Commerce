const productService = require("../services/productService");
const Logger = require("../core/Logger");

const getAllProducts = async (req, res) => {
  const products = await productService.getAllProducts();
  res.render("products/index", { products });
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
  const prod = await productService.findById(productId);
  prod.name = req.body.name;
  prod.desc = req.body.desc;
  if (req.file) {
    // user has uploaded a new picture for the product
    prod.imageUrl = req.file.path;
  }
  prod.price = req.body.price;
  prod.quantity = req.body.quantity;
  prod.rating = req.body.rating;

  await prod.save();
  res.redirect(`/api/v1/products/${productId}`);
};

const showAddProductForm = (req, res) => {
  res.render("products/productForm", { title: "Add Product", editing: false });
};

const showEditProductForm = async (req, res) => {
  const productId = req.params.id;
  const prod = await productService.findById(productId);
  res.render("products/productForm", {
    title: "Edit Product",
    editing: true,
    product: prod,
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
