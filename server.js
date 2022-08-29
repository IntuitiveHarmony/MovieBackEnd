const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

const PORT = process.env.PORT || 3003;

const Movie = require('./models/movie.js');
require('dotenv').config()

const PORT = process.env.PORT || 3003;

const MONGODB_URI  = process.env.MONGODB_URI

const MONGODB_URI  = process.env.MONGODB_URI

const app = express();

app.use(express.json())
app.use(cors())

//-----------------------------------------------
//      NEW MOVIE
//-----------------------------------------------
app.post('/movies', (req, res) => {
  Movie.create(req.body, (err, createdMovie)=>{
    res.json(createdMovie)
  })
})

//-----------------------------------------------
//      GET SINGLE MOVIE
//-----------------------------------------------
app.get('/movies/:id', (req, res) => {
  Movie.find({}, (err,foundMovies) => {
    res.json(foundMovies)
  })
})

//-----------------------------------------------
//      GET ALL MOVIES
//-----------------------------------------------
app.get('/movies', (req, res) => {
  Movie.find({}, (err,foundMovies) => {
    res.json(foundMovies)
  })
})

//-----------------------------------------------
//      DELETE MOVIE
//-----------------------------------------------
app.delete('/movies/:id', (req, res) => {
  Movie.findByIdAndRemove(req.params.id, (err, deletedMovie) => {
    res.json(deletedMovie)
  })
})

//-----------------------------------------------
//      EDIT MOVIE
//-----------------------------------------------
app.put('/movies/:id', (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedMovie) => {
    res.json(updatedMovie)
  })
})

//-----------------------------------------------
//      CONNECTIONS
//-----------------------------------------------
//  CONNECT TO NODEMON
app.listen(PORT, () => {
  console.log('Listening...')
});



// CONNECT TO ATLAS AND NAME SUBDATABASE
mongoose.connect(MONGODB_URI)
mongoose.connection.once('open', ()=>{
    console.log('connected to port: ',PORT);
})
