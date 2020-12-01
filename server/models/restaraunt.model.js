const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const restarauntSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    description : {
        type: String,
        required: true,
    },
    address : {
        type: String,
        required: true,
    },
    imageURLs : {
        type : Array
    }
},
{
    timestamps: true,
});

const Restaraunt = mongoose.model('Restaraunt', restarauntSchema);

module.exports = Restaraunt;