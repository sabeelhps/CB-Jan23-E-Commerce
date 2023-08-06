const productService = require("../services/productService");

const getAllProducts = async (req, res) => {
  const products = await productService.getAllProducts();
  res.render("products/index", { products });
};

const create = async (req, res) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
    desc: req.body.desc,
    imageUrl: req.body.imageUrl,
    quantity: req.body.quantity,
    rating: req.body.rating,
  };

    await productService.create(product);
    res.redirect('/api/v1/products');
};

const showNewForm = (req, res) => {
    res.render('products/showNewForm');
};
const findById = async (req, res) => {
  const { id } = req.params;
  const product = await productService.findById(id);
  res.render("products/show", { product });
};

module.exports = {
    getAllProducts,
    create,
    findById,
    showNewForm,
};
