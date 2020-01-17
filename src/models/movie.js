//this is where we will "model" our movie format
const mongoose = require("mongoose");
const Movie = mongoose.model("movie", {
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  review: {
    type: String,
    required: false
  }
});
module.exports = Movie;
