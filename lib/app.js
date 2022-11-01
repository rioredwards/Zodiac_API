const express = require('express');

const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/zodiacs', require('./controllers/zodiacs'));

app.use('/', (req, res) => {
  res.send('hello world!');
});

// app.use('/horoscopes', require('./controllers/horoscopes'));

module.exports = app;
