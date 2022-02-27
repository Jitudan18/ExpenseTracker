const VendorModel = require("../model/vendor-model")


module.exports.addVendor = function (req,res){
    //db insert role

    console.log(req.body.VendorName);
    console.log(req.body.VendorDetails);
    

    let vendor = new VendorModel({
        VendorName:req.body.VendorName,
        VendorDetails:req.body.VendorDetails,
        user:req.body.user
    })

    vendor.save(function(err,success){
        if(err){
            // console.log(err)
            res.json({msg:"Something went wrong!!", status:-1 ,data:req.body})
        }
        else{
            res.json({msg:"Vendor added", status:200, data:success})
        }
    })
    
}

module.exports.getAllVendor = function(req,res){
    //REST 
    VendorModel.find(function(err,vendor){
        if(err){
            
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Your Vendor is..",status:200,data:vendor})

        }

    })

}

module.exports.deleteVendor = function(req,res){
    let vendorId = req.params.vendorId

     
    VendorModel.deleteOne({"_id":vendorId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!",status:-1,data:err})
        }else{
            res.json({msg:"removed..",status:200,data:data})
        }
    })

}


module.exports.updateVendor = function(req,res){

     
    let vendorId =req.body.vendorId
    let VendorName =req.body.VendorName
    let VendorDetails =req.body.VendorDetails 
    

    VendorModel.updateOne({_id:vendorId},{vendorName:VendorName,VendorDetails:VendorDetails},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated..",status:200,data:data})
        }
    })

}