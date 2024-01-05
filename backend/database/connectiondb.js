const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = () => {
  try {
    mongoose.connect("mongodb://0.0.0.0:27017/sardar");
    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));

    db.once("open", function () {
      console.log("Connection Successful!");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
