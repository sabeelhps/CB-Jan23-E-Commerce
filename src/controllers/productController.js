const dotenv = require('dotenv');
const productService = require('../services/productService');
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const Product = require("../models/Product");
const path= require('path');

const getAllProducts = async (req, res) => {
    const products = await productService.getAllProducts();
    res.render('products/index', { products });
};

const create = async (req, res) => {
  try{
    console.log(req.file);
    const result = await cloudinary.uploader.upload(req.file.path);

  console.log(result);

  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    imageUrl: result.secure_url,
    rating: req.body.rating,
    desc: req.body.desc,
    quantity: req.body.quantity,
    cloudinaryId: result.public_id,
  });

  const newProduct = await productService.create(product);
  res.redirect('/api/v1/products');
}catch(err){
  console.log(err);
}

};

 

const addProduct = (req,res)=>{
    res.render('products/showNewForm');
}

const findById = async (req, res) => {
    const { id } = req.params;
    const product = await productService.findById(id);
    res.render('products/show', { product });
};

module.exports = {
    getAllProducts,
    create,
    findById,
    addProduct
};
