const express = require("express");

const router = express.Router();
const productController = require("../../controllers/productController");
const catchAsync = require("../../core/catchAsync");
const { isAdminOrSeller, isProductAuthor } = require("../../middleware/auth");
const uploadImage = require("../../middleware/upload");

router.get("/", catchAsync(productController.getAllProducts));

router.get("/new", isAdminOrSeller, productController.showAddProductForm);

router.get(
  "/:id/edit",
  isAdminOrSeller,
  catchAsync(productController.showEditProductForm)
);

router.get("/:id", catchAsync(productController.findById));

router.post(
  "/",
  isAdminOrSeller,
  uploadImage,
  catchAsync(productController.create)
);

router.put(
  "/:id",
  isProductAuthor,
  uploadImage,
  catchAsync(productController.editProduct)
);

router.delete(
  "/:id",
  isProductAuthor,
  catchAsync(productController.deleteProduct)
);

module.exports = router;
