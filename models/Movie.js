const mongoose = require('mongoose');

const movie = new mongoose.Schema({
  title: String,
  genre: String,
  image: String,
  rating: Number,
  watched: Boolean
})

const Movie = mongoose.model('Movie', movie)

module.exports = Movie
