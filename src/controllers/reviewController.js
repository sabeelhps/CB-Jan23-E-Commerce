const reviewService = require("../services/reviewService");

const create = async (req, res) => {
  const { id: productId } = req.params;
  const review = {
    rating: req.body.rating,
    comment: req.body.comment,
  };

  await reviewService.create(productId, review);
  res.redirect(`/api/v1/products/${productId}`);
};

const deleteReview = async (req, res) => {
  const { id: productId } = req.params;
  const { reviewId } = req.params;
  await reviewService.deleteReview(reviewId);
  res.redirect(`api/v1/products/${productId}`);
};

module.exports = {
  create,
  deleteReview,
};