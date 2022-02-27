const fs = require("fs")
const express = require("express")
const app = express()
const mongoose = require("mongoose")

//middle ware

app.use(express.json())//read mobile data
app.use(express.urlencoded ({extended:true}))


const sessionController = require("./controller/session-controller")
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const categoryController = require("./controller/category-controller")
const subcategoryController= require("./controller/subcategory-controller")
const billController = require("./controller/bill-controller")
const expenseController = require("./controller/expense-controller")
const vendorController = require("./controller/vendor-controller")


//database
mongoose.connect('mongodb://localhost:27017/expensetracker',function(err){
    if(err){
        console.log("db connection failed!!");
        console.log(err);
    }else{
        console.log("db coonected successfully..");
    }
})



//url pages
app.get("/signup",function(req,res){
    let signupHtml = fs.readFileSync("./views/signup.html")
    res.write(signupHtml)
    //res.write("hello Welcome..")
    res.end()
})

app.get("/login",function(req,res){
    let loginHtml = fs.readFileSync("./views/login.html")
    res.write(loginHtml)
    //res.write("hello welcome..")
    res.end()
})

//role
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.put("/roles",roleController.updateRole)
app.delete("/roles/:roleId",roleController.deleteRole)


//user 
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.put("/users",userController.updateUser)
app.delete("/users/:userId",userController.deleteUser)

//category
app.post("/categories",categoryController.addCategories)
app.get("/categories",categoryController.getAllCategories)
app.delete("/categories/:categoryId",categoryController.deleteCategory)
app.put("/categories",categoryController.updateCategory)

//subcategory
app.post("/subcategories",subcategoryController.addSubcategory)
app.get("/subcategories",subcategoryController.getAllSubcategories)
app.delete("/subcategories/:subcategoryId",subcategoryController.deleteSubcategory)
app.put("/subcategories",subcategoryController.updateSubcategory)

//Personal Bill
app.post("/bills",billController.addBill)
app.get("/bills",billController.getAllBill)
app.put("/bills",billController.updateBill)
app.delete("/bills/:billId",billController.deleteBill)

//User Expense
app.post("/expenses",expenseController.addExpense)
app.get("/expenses",expenseController.getAllExpense)
app.put("/expenses",expenseController.updateExpense)
app.delete("/expenses/:expenseId",expenseController.deleteExpense)

//Vendor
app.post("/vendors",vendorController.addVendor)
app.get("/vendors",vendorController.getAllVendor)
app.put("/vendors",vendorController.updateVendor)
app.delete("/vendors/:vendorId",vendorController.deleteVendor)



//from html page to database
app.get("/login",sessionController.login)
app.post("/signup",sessionController.signup)
app.post("/savedata",sessionController.savedata)

app.listen(3000,function(){
    console.log("Server Started on 3000")
})
