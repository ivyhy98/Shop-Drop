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
    user: {type: Schema.Types.ObjectId, ref:'User'},
    pocOwned: {type: Boolean, required: true},
    reviews: [{
        user: { type: Schema.Types.ObjectId, ref: 'User'},
        comment: String,
        rating: Number
    }],
    location: {city: String, state: String},
},{
    timestamps: true
})

shopsSchema.virtual('rating').get(function(){
    const all = this.reviews.ratings.reduce((total, rating) => total + rating, 0);
    return (all / this.reviews.length); //ratings out of 5 stars
})

shopsSchema.methods.addReview = function(review){
    this.reviews.push(review);
   return this.save();
 }

module.exports = mongoose.model('Shop', shopsSchema)