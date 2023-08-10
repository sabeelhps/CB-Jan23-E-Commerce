const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    desc: String,
    imageUrl: String,
    quantity: Number,
    rating: Number,
    cloudinaryId: String,
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review',
        },
    ],
}, { versionKey: false, timestamps: true });

const Product = mongoose.model('Product', productSchema);


module.exports = Product;
