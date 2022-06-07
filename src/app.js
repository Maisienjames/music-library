const express = require('express');
const artistRouter = require('./routers/artist');
const getDb = require('../src/services/db');

const app = express();

app.use(express.json());

app.use('/artist', artistRouter);

app.get('/', (req, res) => {
    res.status(200).json('Hello World')
  });

module.exports = app;