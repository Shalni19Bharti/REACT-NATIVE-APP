const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./Routes/userRouter');

require('dotenv').config();
require('./Models/database');
const PORT = process.env.PORT || 8000;


app.use(bodyParser.json());
app.use(cors());
app.use('/auth', userRouter);


app.listen(PORT, () => {
    console.log(`Server is Working on ${PORT}`)
})