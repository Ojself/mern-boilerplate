const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The country name is required"],
    minlength: 1,
    unique: true,
  },
  capital: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
  },
  area: {
    type: Number,
  },
});

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;
