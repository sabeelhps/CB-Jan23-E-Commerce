const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    desc: String,
    imageUrl: String,
    quantity: Number,
    rating: Number,
    cloudinary_id: String,
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review',
        },
    ],
}, { versionKey: false, timestamps: true });

const Product = mongoose.model('Product', productSchema);

// creating a separate schema for image upload to cloudinary
// const imageSchema = new mongoose.Schema({
//     name: String,
//     imagePath: String,
//     cloudinary_id: String
// });

// const Image = mongoose.model('Image', imageSchema);

module.exports = Product;
