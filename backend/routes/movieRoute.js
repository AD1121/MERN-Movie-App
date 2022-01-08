const express = require('express')
const router = express.Router()
const Movie = require('../models/movieSchema')

// Add Movies to DB
router.post('/create', ((req, res, next) => {
  try {
    const title = req.body.title
    const description = req.body.description
    const actors = req.body.actors
    const rate = req.body.rate
    const gender = req.body.gender
    const regi = req.body.regi
    const movielength = req.body.movielength
    const year = req.body.year
    const newMovie = new Movie({
      title,
      description,
      actors,
      rate,
      gender,
      regi,
      movielength,
      year,
    })

    newMovie.save()
  } catch (err) {
    next(err)
  }
}))

router.get('/movies', async (req, res, next) => {
  try {
    const movie = await Movie.find()
    res.json(movie)
    console.log(movie);
  } catch (err) {
    next(err)
  }
})

module.exports = router



