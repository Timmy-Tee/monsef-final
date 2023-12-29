const express       =   require("express");
const app           =   express();
const routes        =   express.Router()
const multer        =   require("multer");
const path          =   require("path");




let storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, "./public/upload/");  
    },
    filename: (req,file,cb)=>{
        cb(null, file.originalname + '_' + Date.now() + path.extname(file.originalname))
    }
});

let upload = multer({
    storage: storage
})


module.exports = upload