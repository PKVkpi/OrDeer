const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const dishSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    type : {
        type: Number,
        required: true,
    },
    price : {
        type: Number,
        required: true,
    },
    description : {
        type : String,
        required: true,
    },
    inStock : {
        type : Boolean,
        required: true,
    }
},
{
    timestamps: true,
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;