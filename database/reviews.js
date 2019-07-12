const mongoose = require('mongoose');
const db = require('./index.js');

const reviewSchema = new mongoose.Schema(
  {
    record_id: {
      type: String,
      unique: true,
    },
    bus_id: String,
    rating: Number,
    profile_name: String,
    friends: Array,
    profile_image: String,
    name: Array,
    review_total: Number,
    photos: Array,
    photo_total: Number,
    level: String,
    location: String,
    check_ins: Number,
    seated: Boolean,
    useful_count: Number,
    funny_count: Number,
    cool_count: Number,
    text: String,
    url: String,
    voted: Array,
  },
);

const Review = mongoose.model('Review', reviewSchema);

async function getBusinessReviews(business) {
  return await Review.find({ bus_id: business }, (err, business) => business);
}

module.exports = {
  Review,
  getBusinessReviews,
};
