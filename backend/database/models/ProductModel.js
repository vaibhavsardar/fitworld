const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  pname: {
    type: String,
  },
  pid: {
    type: String,
  },
  pprice: {
    type: String,
  },
  pdescription: {
    type: String,
  },
  pimage: {
    type: String,
  },
});

module.exports = mongoose.model("myproducts", ProductSchema);
