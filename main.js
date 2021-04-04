const express = require('express')
const app = express()
const path = require('path')
const movies = require('./movies.json')


app.listen(3002, () => {
  console.log('listening');
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
})
app.get('/movies', (req, res) => {
  res.send(movies.map(movie =>
    `
    <div class="movie-card">
      <a href="">
        <h1>${movie.title}</h1>
        <p>${movie.year}</p>
        <p>${movie.director}</p>
        <p>${movie.duration}</p>
        <p>${movie.genre}</p>
        <p>${movie.rate}</p>
      </a>
    </div>`
  ).join('')
  )
})
