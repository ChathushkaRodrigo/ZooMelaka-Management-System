const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    projectID:{
        type:String,
        required:true
    },
    name:{
        type:String,
        require:true  
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        required:true
    },
    supervisor:{
        type:String,
        required:true
    },
    workingTeam:{
        type:String,
        required:true
    }

})  

module.exports = mongoose.model('Projects',postSchema);