const Schema = require('mongoose').Schema;

const categorySchema = new Schema({
    name: {type: String, required: true},
    shops: [{
        type: Schema.Types.ObjectId,
        ref: 'Shops'
    }]
}, {
    timestamps: true
});
