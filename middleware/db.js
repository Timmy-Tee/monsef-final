const express   = require("express")
const app = express()
const mongoose          =   require("mongoose");


mongoose.connect("mongodb+srv://olawooreifeoluea2004:opeyemi02@cluster0.3qr8fxu.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connection Successful");
})
.catch((err)=>{
    console.log(err)
})


const uploads = new mongoose.Schema({
    imageFileName: String
})

const Image = new mongoose.model("image", uploads);

module.exports  = Image


