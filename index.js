// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./Controller/loginrouter');
let cors = require('cors');


const app = express();
const PORT =  3000;

app.use(bodyParser.json());




app.use(
    cors({
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true, 
      optionsSuccessStatus: 204, 
    })
  );
  const uri = "mongodb+srv://hornedfoe:Ranjith123@cluster0.ngirblx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connected to MongoDB Atlas");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
      process.exit(1);
    });
  
app.use('/auth',router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
