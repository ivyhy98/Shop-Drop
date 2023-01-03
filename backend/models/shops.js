const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('./category');

const shopsSchema = new Schema({
    name: {type: String, required: true, unique: true},
    information: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    image: String,
    link: String,
    rate: Number,
    user: {type: String, required: true},
    pocOwned: {type: Boolean, required: true},
    reviews: [{
        user: String,
        comment: String,
        rating: Number
    }],
    location: {city: String, state: String},
},{
    timestamps: true
})

module.exports = mongoose.model('Shop', shopsSchema)