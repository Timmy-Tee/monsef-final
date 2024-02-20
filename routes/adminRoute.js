const express = require("express");
const routes = express.Router();
const uploadMiddleware = require("../middleware/upload");
const imageDB = require("../middleware/db");
const cloudinary = require("../cloudinary");

// Get Request
routes.get("/", (req, res) => {
  res.render("admin");
});

routes.post("/", uploadMiddleware.single("myFile"), (req, res, next) => {
  const file = req.file.filename;
  cloudinary.uploader.upload(req.file.path, function (err, result){
      if(err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: err
        })
      }

      res.status(200)
      const images = new imageDB({
          imageFileName: result.url
      })

      images.save();

    })

  res.redirect("/gallery");
});

module.exports = routes;
