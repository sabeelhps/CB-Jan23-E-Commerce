const mongoose = require("mongoose");
const Product = require("./Product");

const reviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 1,
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

// pre-hook on remove : when review is deleted then it should be removed from product
// and it's contribution to product's average rating should also be removed
reviewSchema.pre(
  "deleteOne",
  { document: true, query: false },
  async function (next) {
    const product = await Product.findOne({ reviews: this._id });
    // console.log(`product : \n ${product}`);
    product.rating =
      (product.rating * product.reviews.length - this.rating) /
      (product.reviews.length - 1);
    product.reviews = product.reviews.filter(
      (review) => !review._id.equals(this._id)
    );
    product.save();
    next();
  }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
