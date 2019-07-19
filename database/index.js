const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://mongodb/reviews', { useNewUrlParser: true, server: { reconnectTries: Number.MAX_VALUE } });

module.exports = db;
