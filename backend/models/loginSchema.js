const mongoose = require('mongoose');
// const { string } = require('prop-types');

const Schema = mongoose.Schema;

const loginSchema  = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("loginSchema" , loginSchema);