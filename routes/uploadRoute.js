const express       =   require("express");
const route        =   express.Router()
const uploadMiddleware = require("../middleware/upload");
const imageDB           = require("../middleware/db")




// Get Request
route.get("/", (req,res)=>{
        imageDB.find({})
        .then((data) =>{
            res.render("gallery", {
                results: data,
            });

        })
        .catch(err=>{
            console.log(err)
        })

})



module.exports = route


