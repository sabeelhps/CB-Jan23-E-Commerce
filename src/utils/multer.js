const multer = require("multer");
const path = require("path");

module.exports = multer({
    // dest: "./upload",
    storage: multer.diskStorage({}),
    fileFilter: (req,file,cb)=>{
        // let ext = path.extname(file.originalname);
        // if(ext!== ".jpg" && ext !==".jpeg" ){
        //     cb(new Error("Unsupported file type!"), false);
        //     return;
        // }
        cb(null,true);
    },
});