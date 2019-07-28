const express = require('express');
const cors = require('cors');
const movies = require('./movies.json');
const recommendations = require('./recommendations.json');

const app = express();

app.use(cors());

app.get('/api/movies', function (_, res) {
  res.send(movies);
});

app.get('/api/recommendations', function (_, res) {
  res.send(recommendations);
});

app.listen(3000);