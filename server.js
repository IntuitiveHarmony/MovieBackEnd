const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Movie = require('./models/movie.js');

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
app.listen(3000, () => {
  console.log('Listening...')
});


// CONNECT TO MONGO AND NAME SUBDATABASE
mongoose.connect('mongodb://localhost:27017/Movies')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
})
