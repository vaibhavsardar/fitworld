const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    sname: {
      type: String,
      required: true,
    },
});


module.exports = UserModel = mongoose.model("users", UserSchema);