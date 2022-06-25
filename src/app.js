const express = require('express');
const artistRouter = require('./routes/artist');
const albumRouter = require('./routes/album');
const getDb = require('../src/services/db');

const app = express();

app.use(express.json());

app.use('/artist', artistRouter);

app.use('/album', albumRouter);

app.get('/', (req, res) => {
    res.status(200).json('Hello World')
  });

module.exports = app;