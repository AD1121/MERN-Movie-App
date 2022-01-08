const mongoose = require('mongoose')

const movieSchema = {
  title: String,
  description: String,
  actors: String,
  rate: Number,
  gender: String,
  regi: String,
  movielength: Number,
  year: Number
}

const Movies = mongoose.model('Movies', movieSchema)

module.exports = Movies