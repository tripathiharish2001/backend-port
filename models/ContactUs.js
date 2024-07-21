const mongoose = require("mongoose");
require("dotenv").config();

const constactUsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model("ContactUs" , constactUsSchema);