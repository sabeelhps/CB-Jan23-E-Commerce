const express = require("express");

const uuidController = require("../../controllers/uuidController");

const router = express.Router();

router.get("/:count", uuidController.generateUuids);

module.exports = router;
