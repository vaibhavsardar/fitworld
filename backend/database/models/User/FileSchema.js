const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
    fileName: String,
    fileSize: Number,
    filePath: String
  });

module.exports = mongoose.model("files",FileSchema);

