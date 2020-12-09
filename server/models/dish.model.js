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
    }
},
{
    timestamps: true,
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;