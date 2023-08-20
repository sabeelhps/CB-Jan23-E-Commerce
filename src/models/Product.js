const mongoose = require('mongoose');
const Review = require('./Review');
const Logger = require('../core/Logger');

const productSchema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        desc: String,
        imageUrl: String,
        quantity: Number,
        rating: Number,
        reviews: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Review',
            },
        ],
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    { versionKey: false, timestamps: true },
);

productSchema.pre(
    'deleteOne',
    { document: true, query: false },
    async function (next) {
        console.log(this instanceof Query);
        Logger.info('inside pre hook');
        next();
    // Logger.info(`product being deleted: ${this}`);
    // Logger.info(`refd review : ${this.reviews}`);
    // await Review.deleteMany({ _id: { $in: this.reviews } });
    // next();
    },
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
