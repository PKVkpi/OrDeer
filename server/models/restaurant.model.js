const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const { schema } = require('./dish.model');

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
    imageURLs : [String],
    menuId : {type : Schema.Types.ObjectId}
},
{
    timestamps: true,
});

const Restaraunt = mongoose.model('Restaraunt', restarauntSchema);

module.exports = Restaraunt;