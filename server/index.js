const express = require('express');
const axios = require('axios');
const getReviews = require('../database/reviews');
const app = express();
const port = 3000;

app.get('/reviews', function(req, res) {
  getReviews(reviews => {
    res.send(reviews);
  });
});

app.listen(port, () => {
  console.log(`Reviews server is running on port ${port}`);
});

