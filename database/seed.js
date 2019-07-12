const db = require('./index.js');
const { Review } = require('./reviews.js');

const sampleData = [
  {
    bus_id: 'deadhead123',
    rating: 3.5,
    user_name: 'Deadhead L.',
    profile_name: 'archie_bunker',
    friends: [],
    image_url: 'https://source.unsplash.com/random',
    name: 'test name',
    review_total: 3,
    photo_total: 0,
    level: 8,
    location: 'San Francisco, CA',
    check_ins: 2,
    seated: true,
    useful_count: 1,
    funny_count: 2,
    cool_count: 3,
    photos: [],
    text: 'Congratulations, you played yourself. The key is to enjoy life, because they don’t want you to enjoy life. I promise you, they don’t want you to jetski, they don’t want you to smile. Wraith talk. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. Life is what you make it, so let’s make it. The weather is amazing, walk with me through the pathway of more success. Take this journey with me, Lion!',
    url: 'https://www.archivebarsf.com/',
    voted: [],
  },
];

const seed = () => {
  Review.insertMany(sampleData)
    .then(() => console.log('success'))
    .catch(err => console.log(err));
};

seed();
