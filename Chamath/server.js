//Import Express
const express = require('express');
//Import Mongoose
const mongoose = require('mongoose');
//Invoke bodyParser package to covert the request to a javascript object as the server cannot understand information in json format
const bodyParser = require('body-parser');
//Set CORS to provide connect/express middleware
const cors = require('cors');
//Invoke Express
const app = express();
//Import Routes
const postRoutes = require('./routes/posts');
//Code App Middle-Ware
app.use(bodyParser.json());
app.use(cors());
// How the routes communicate with the server, Route Middle-Ware. Read front-end request
app.use(postRoutes);
//Declare A Port
const PORT = 8000;
//Make MongoDB Database Connection
const DB_URL = 'mongodb+srv://RGP:RGP123@mernapp.jjkpp.mongodb.net/mernCRUD?retryWrites=true&w=majority';

//Write The Database Connection
mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("DB Connected!");
    })
    .catch((err) => console.log('DB Connection Error', err));
//Make Application Listen In Order To Run On A Server
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});