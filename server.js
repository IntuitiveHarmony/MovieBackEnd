const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const db = mongoose.connection;
require('dotenv').config()
const Movie = require('./models/movie.js');
const PORT = process.env.PORT || 3003;



const MONGODB_URI  = process.env.MONGODB_URI

const app = express();
app.use(cors())
app.use(express.json())





//-----------------------------------------------
//      GET ALL MOVIES
//-----------------------------------------------
// app.get('/movies', (req, res) => {
//   Movie.find({}, (err,foundMovies) => {
//     res.json(foundMovies)
//   })
// })
//-----------------------------------------------
//      NEW MOVIE
//-----------------------------------------------
app.post('/movies', (req, res) => {
  Movie.create(req.body, (err, createdMovie)=>{
    res.json(createdMovie)
  })
})
//-----------------------------------------------
//      DELETE MOVIE
//-----------------------------------------------
// app.delete('/movies/:id', (req, res) => {
//   Movie.findByIdAndRemove(req.params.id, (err, deletedMovie) => {
//     res.json(deletedMovie)
//   })
// })

//-----------------------------------------------
//      EDIT MOVIE
//-----------------------------------------------
// app.put('/movies/:id', (req, res) => {
//   Movie.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedMovie) => {
//     res.json(updatedMovie)
//   })
// })

//-----------------------------------------------
//      GET SINGLE MOVIE
//-----------------------------------------------
// app.get('/movies/:id', (req, res) => {
//   Movie.find({}, (err,foundMovies) => {
//     res.json(foundMovies)
//   })
// })

//-----------------------------------------------
//      CONNECTIONS
//-----------------------------------------------
//  CONNECT TO NODEMON
app.listen(3000, () => {
  console.log('Listening...')
});


// CONNECT TO ATLAS AND NAME SUBDATABASE
mongoose.connect(MONGODB_URI)

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

mongoose.connection.once('open', ()=>{
    console.log('connected to port: ',PORT);
})
