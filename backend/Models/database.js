const mongoose = require('mongoose');

const mongo_url = process.env.mongoUrl;

mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB Connected...');
    }).catch((e) => {
        console.log('MongoDB Connection Error: ', e);
    })