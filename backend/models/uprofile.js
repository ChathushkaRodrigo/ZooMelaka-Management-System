const mongoose = require('mongoose');
const profileSchema = new mongoose.Schema({
    fName:{
        type: String,
        required:true,
        trim: true
    },
    lName:{
        type:String,
        required:true,
        trim: true
    },
    uName:{
        type:String,
        required:true,
        trim: true
    },
    email:{
        type:String,
        required:true,
        trim: true,
       // validate(value) {
        //    if (!validator.isEmail(value)) {
        //      throw new Error('Email is not valid')
         //   }
        //}
    },
    password:{
        type:String,
        required:true,
        trim: true
    },
    team:{
        type:String,
        required:true,
        trim: true
    }
});

module.exports = mongoose.model('Users', profileSchema)