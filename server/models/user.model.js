const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new Schema({
    name : {
        type: String,
        required: false,
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
    },
    role : {
        type : Number,
        default: 0
    },
    cart : [String],
},
{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
