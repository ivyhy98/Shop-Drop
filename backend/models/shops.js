const Schema = require('mongoose').Schema;

const shopsSchema = new Schema({
    name: {type: String, required: true},
    description: String,
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }],
    image: String,
    link: String,
    rate: Number,
    pocOwned: Boolean,
    reviews: {
        user: {type: Schema.Types.ObjectId, ref: 'User'},
        comment: String,
        rating: Number
    }
},{
    timestamps: true
})