const mongoose = require('mongoose');
const { default: Appliances } = require('../../frontend/src/files/Appliances');
const schema = mongoose.Schema();

const userOrders = new Schema({
    key:{
        type:String,
        required:true
    },
    applianceName:{
        type:String,
        required:true
    },
    problem:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports =  mongoose.model("userOrders" , signupSchema);

// Working On 