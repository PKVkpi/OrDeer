const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const menuSchema = new Schema({
    dishIDs : [String]
},
{
    timestamps: true,
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;