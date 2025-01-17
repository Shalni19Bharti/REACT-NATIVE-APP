// const mongoose = require("mongoose");

// const mongo_url = process.env.mongoUrl ;

// mongoose.connect(mongo_url)
// .then(()=> {
//     console.log("MongoDB Connected Successfully");
// })
// .catch((e) => {
//     console.log(e);
// })


const mongoose = require('mongoose');

const mongo_url = process.env.mongoUrl;

mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB Connected...');
    }).catch((err) => {
        console.log('MongoDB Connection Error: ', err);
    })