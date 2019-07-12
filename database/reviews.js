const mongoose = require('mongoose');
const db = require('./index.js');

const reviewSchema = new mongoose.Schema(
  {
    bus_id: {
      type: String,
      unique: true,
    },
    rating: Number,
    user_name: String,
    profile_name: String,
    friends: Array,
    image_url: String,
    name: String,
    review_total: Number,
    photo_total: Number,
    level: String,
    location: String,
    check_ins: Number,
    seated: Boolean,
    useful_count: Number,
    funny_count: Number,
    cool_count: Number,
    photos: Array,
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
