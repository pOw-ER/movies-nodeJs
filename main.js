const express = require('express')
const app = express()
const path = require('path')
const movies = require('./movies.json')


app.listen(3002, () => {
  console.log('listening');
})

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
})
app.get('/movies/api', (req, res) => {
  res.send(
    movies.map(movie =>
      `
    <div class= "movie-card" >
      <h1>${movie.title}</h1>
      <p>${movie.year}</p>
      <p>${movie.director}</p>
      <p>${movie.duration}</p>
      <p>${movie.genre}</p>
      <p>${movie.rate}</p>
    </div> `
    ).join('')
  )
})
app.get('/movies/api/:year', (req, res) => {
  // console.log(req.params.year);
  let movie = movies.filter(movie => movie.year === req.params.year)
  // console.log(movie);
  res.send(
    movie.map(movie =>
      `
    <div class= "movie-card" >
      <h1>${movie.title}</h1>
      <p>${movie.year}</p>
      <p>${movie.director}</p>
      <p>${movie.duration}</p>
      <p>${movie.genre}</p>
      <p>${movie.rate}</p>
    </div> `
    ).join('')
  )
})
