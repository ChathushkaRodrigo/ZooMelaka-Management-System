const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require ("cors");
const dotenv = require("dotenv");
const app = express(); 
require("dotenv").config();

const PORT = process.env.PORT || 8070;
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;
mongoose.connect(URL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifieldTopology: true,
    useFindAndModify: false,
  
});
const connection = mongoose.connection;
connection.once("open",() =>{
    console.log("Mongodb Connection success!");
})

const researchRouter =require("./routes/researches.js");

app.use("/research",researchRouter);
app.listen(PORT, () => {
    console.log(`Sever is up and running on port ${PORT}`)
})
