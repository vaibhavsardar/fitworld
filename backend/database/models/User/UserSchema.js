const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  token: { type: String }

});

UserSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id },'ADHFGJLGLFDGJDHFYGD',{ expiresIn: '20d'});
    // this.tokens = this.tokens.concat({token:token});
    this.token = token;
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
    
  }
};

module.exports = mongoose.model("signup", UserSchema);
