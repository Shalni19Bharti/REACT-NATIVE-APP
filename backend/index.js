// const express = require("express");
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require("cors");
// const userRouter = require("./Routers/userRouter");
// require("dotenv").config();
// require("./Models/database");

// const PORT = process.env.PORT || 8000 ;

// app.use(bodyParser.json());
// app.use(cors());
// app.use("/user" , userRouter);

// app.listen(PORT , ()=>{
//     console.log("Server is Working");
// })



const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8000;


app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})