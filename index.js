// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./Controller/loginrouter');



const app = express();
const PORT =  3000;

app.use(bodyParser.json());




mongoose.connect("mongodb://127.0.0.1:27017/qlozet").then(() => {
  console.log("Connected to DB");
});

app.use('/auth',router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
