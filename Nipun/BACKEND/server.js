const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotnev = require('dotenv');
const app = express();
require("dotenv").config();

//assign port value or 8070 to PORT
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongodb Connection successful!');
})


const adoptionRouter = require("./routes/adoptions.js");

//this works when localhost url "/employee" page is called
//runs employees.js in route
app.use("/adoption", adoptionRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port : ${PORT}`);
})

//nodemon is assigned in package.json
//