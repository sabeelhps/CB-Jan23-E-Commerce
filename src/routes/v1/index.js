const express = require("express");

const router = express.Router();
const productRoutes = require("./productRoutes");
const reviewRoutes = require("./reviewRoutes");
const userRoutes = require("./userRoutes");
const uuidRoutes = require("./uuidRoutes");

router.use("/products", productRoutes);
router.use("/products", reviewRoutes);
router.use("/users", userRoutes);
router.use("/uuid", uuidRoutes);

module.exports = router;
