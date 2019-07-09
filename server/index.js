const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Successful request made to the reviews server.');
});

app.listen(port, () => {
  console.log(`Reviews server is running on port ${port}`);
});