const multer = require("multer");

const multipleUploadSolution = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/temp");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

module.exports = 
{
  
  multerUpload: multer({storage: multipleUploadSolution, limits: { fileSize: 1024 * 1024 * 5 }}) ,

};