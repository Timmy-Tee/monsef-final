const express       =   require("express");
const routes        =   express.Router()
const uploadMiddleware = require("../middleware/upload");
const imageDB           = require("../middleware/db")




// Get Request
routes.get("/", (req,res)=>{
    
    res.render("admin")

})

routes.post("/", uploadMiddleware.single('myFile'), (req,res, next)=>{
    const file = req.file.filename;

    if(!file){
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    };
    const images = new imageDB({
        imageFileName: file
    })

    images.save();
    
    res.redirect("/gallery")

   
})


module.exports = routes