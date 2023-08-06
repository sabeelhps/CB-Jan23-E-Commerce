const express = require("express");

const router = express.Router();
const productController = require("../../controllers/productController");
const catchAsync = require("../../core/catchAsync");

router.get("/", catchAsync(productController.getAllProducts));

router.get("/priceasc", productController.priceasc);
router.get("/pricedsc", productController.pricedsc);
router.post("/", catchAsync(productController.create));

router.get("/new", productController.showNewForm);

router.get("/:id", catchAsync(productController.findById));

module.exports = router;
