const { Schema } = require("mongoose");
const mongoose = require('mongoose');

const userSchema = new Schema({
    username : {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 4,
    },
    email : {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 4,
    },
    password : {
        type: String,
        required: true,
        minlength: 4,
    }
},
{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
