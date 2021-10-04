const mongoose  = require('mongoose');

const postSchema = new mongoose.Schema({

    eID:{
        type:String,
        required:true

    },
    userName:{
        type:String,
        required:true

    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    employeeType:{
        type:String,
        required:true
    },
    DOB:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    additional:{
        type:String,
        required:true
    }
    

});

module.exports = mongoose.model('Employees',postSchema);