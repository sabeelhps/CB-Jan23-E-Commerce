const reviewRepo = require("../repositories/reviewRepo");
const productRepo = require("../repositories/productRepo");

const create = async (productId, review) => {
  // find the product with the id
  const product = await productRepo.findByIdWithReviews(productId);
  // save the incoming review
  const newReview = await reviewRepo.save(review);
  product.rating =
    (product.rating * product.reviews.length + newReview.rating) /
    (product.reviews.length + 1);
  product.reviews.push(newReview);
  await productRepo.save(product);
  return product;
};

const deleteReview = async (reviewId) => {
  await reviewRepo.deleteReview(reviewId);
};

module.exports = {
  create,
  deleteReview,
};
