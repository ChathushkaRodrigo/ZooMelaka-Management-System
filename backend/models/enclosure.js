//Import Mongoose

const mongoose = require('mongoose');

//Initialize postSchema

const postSchema_s = new mongoose.Schema({

//Initialize The Coloumns, i.e The Properties And Variables

    Enclosure_ID:{
        type:String,
        required:true
    },
    Enclosure_Name:{
        type:String,
        required:true
    },
    Enclosure_Type:{
        type:String,
        required:true
    },
    Last_Date_Of_Enclosure_Maintainence:{
        type:String,
        required:true
    },
    Enclosure_Status:{
        type:String,
        required:true
    },
    Number_Of_Animals:{
        type:String,
        required:true
    },
    Last_Attended_Zookeeper:{
        type:String,
        required:true
    },
    Last_Time_Of_Enclosure_Maintainence:{
        type:String,
        required:true
    }
});

//Export The Created Model To Be Utilized In Routes
module.exports = mongoose.model('Enclosures',postSchema_s);
