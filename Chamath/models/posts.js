//Import mongoose
const mongoose = require('mongoose');
//Declare a variable
const postSchema = new mongoose.Schema({
    //Initialize Schema
    //Put all coloumns, i.e. properties or variables that has to be included in our schema
    topic: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    postCategory: {
        type: String,
        required: true
    }

});

//Export Module
module.exports = mongoose.model('Posts', postSchema);