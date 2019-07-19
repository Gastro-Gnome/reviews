const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true, server: { reconnectTries: Number.MAX_VALUE } });

module.exports = db;
