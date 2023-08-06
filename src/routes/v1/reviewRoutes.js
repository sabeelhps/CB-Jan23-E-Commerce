const express = require('express');
const reviewController = require('../../controllers/reviewController');

const router = express.Router();

router.post('/:id/reviews', reviewController.create);

router.delete('/:id/reviews/:reviewId', reviewController.deleteReview);

module.exports = router;
