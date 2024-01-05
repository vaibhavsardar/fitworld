const mongoose = require("mongoose");

const InteckFormSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    // required: true,
  },
  username: {
    type: String,
    // required: true,
  },
  fname: {
    type: String,
    required: true,
  },

  lname: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  goal: {
    type: String,
    required: true,
    default:null
  },
  duration: {
    type: String,
    // required: true,
    default:null
  },
  isDone:{
    type:Boolean,
    default:false,
  }
});

module.exports = mongoose.model("inteckform", InteckFormSchema);
