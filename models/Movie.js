const mongoose = require('mongoose');

const movie = new mongoose.Schema({
  title: String,
  year: String,
  genre: [String],
  image: String,
  backdrop: String,
  rating: Number,
  overview: String,
  watched: Boolean
})

const Movie = mongoose.model('Movie', movie)

module.exports = Movie
