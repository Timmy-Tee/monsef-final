const cloudinary = require('cloudinary').v2;
          
cloudinary.config({ 
  cloud_name: 'dtukeebne', 
  api_key: '468393665625932', 
  api_secret: 'lElBefxxuX661M1k1tuP4dPGTUE' 
});

module.exports = cloudinary;
