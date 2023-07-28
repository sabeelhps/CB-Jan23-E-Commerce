const Review = require('../models/Review');

const save = (review) => {
    const newReview = new Review(review);
    return newReview.save();
};

const deleteReview = async (reviewId) => {
    const review = await Review.findById(reviewId);
    review.deleteOne();
};

module.exports = {
    save,
    deleteReview,
};
