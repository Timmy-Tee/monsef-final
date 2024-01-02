const cloudinary = require('cloudinary').v2;
          

          
cloudinary.config({ 
  cloud_name: 'dukye1vfp', 
  api_key: '881132254965821', 
  api_secret: 'sNLHcVZYeaVyHTvdalmAKBapeCQ' 
});

module.exports = cloudinary;
