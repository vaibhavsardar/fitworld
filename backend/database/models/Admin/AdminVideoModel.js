const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
 
      mname:String,
      video:[
         {
            title:{type: String},
            url:{type: String}
         }
      ]
   


  
});

module.exports = mongoose.model("video", VideoSchema);
