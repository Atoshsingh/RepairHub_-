const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signupSchema =  new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirm_password:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model("signupSchema" , signupSchema);
