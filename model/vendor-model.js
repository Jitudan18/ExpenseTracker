const mongoose =require("mongoose");

//schema

let VendorSchema =new mongoose.Schema({
    VendorName:{
        type:String
    },

    VendorDetails:{
        type:String
    },

    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
}
})

//model

let VendorModel = mongoose.model("vendor",VendorSchema) 

module.exports = VendorModel