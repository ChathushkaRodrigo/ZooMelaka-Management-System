const mongoose  = require('mongoose');

const postSchema1 = new mongoose.Schema({

    eID:{
        type:String,
        required:true

    },
    date:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('salaryChanges',postSchema1);