const express = require('express');
const app = express();

app.post('/tasks', (req, res) => {
  res.send('task sent');
});

module.exports = app;