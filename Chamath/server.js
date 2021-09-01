//Import Express

const express = require('express');

//Import Mongoose

const mongoose = require('mongoose');

//Invoke Installed bodyParser Package

const bodyParser = require('body-parser');

//Invoke Express To Run The Application

const app = express();

//Import Routes

const postRoutes = require('./routes/animals');

const postRoutes_s = require('./routes/enclosures');

//App Middleware

app.use(bodyParser.json());

//Route Middleware

app.use(postRoutes);

app.use(postRoutes_s);

//Initialize & Declare Port

const PORT = 8000;

//Initialize The Database Connection

const DB_URL = 'mongodb+srv://ZooDatabaseAdmin:melaka123@zoo-managment-system-cl.lbmt4.mongodb.net/ZooManagementSystem?retryWrites=true&w=majority';

//Setup The Connection

mongoose.connect(DB_URL,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
.then(()=>{
    console.log('Database Connected');
})
.catch((err)=>console.log('Database Connection Error',err));

//Make The Server That Runs The Application 'Listen' And Declare The Server Configuration

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
});

/*Go To package.json To Utilize Nodemon To Code A New Script To Auto - Re-start The Server
Afterwards, Make The Database Connection Using MongoDB Atlas*/