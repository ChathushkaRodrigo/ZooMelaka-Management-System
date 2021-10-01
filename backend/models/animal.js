//Import Mongoose

const mongoose = require('mongoose');

//Initialize postSchema

const postSchema = new mongoose.Schema({

//Initialize The Coloumns, i.e The Properties And Variables

    Animal_ID:{
        type:String,
        required:true
    },
    Animal_Name:{
        type:String,
        required:true
    },
    Animal_Species:{
        type:String,
        required:true
    },
    Animal_Date_Of_Birth:{
        type:String,
        required:true
    },
    Animal_Gender:{
        type:String,
        required:true
    },
    Feeding_And_Watering_Date:{
        type:String,
        required:true
    },
    Feeding_And_Watering_Time:{
        type:String,
        required:true
    },
    Animal_Satisfaction_Level:{
        type:String

    },
    Animal_Health_Level:{
        type:String
        
    },
    Attended_Zookeeper:{
        type:String,
        required:true
    },
    Date_Of_Treatment_And_Medical_Care:{
        type:String
    },
    Time_Of_Treatment_And_Medical_Care:{
        type:String
    },
    Current_Enclosure_ID:{
        type:String,
        required:true
    },
    Adoptability:{
        type:String,
        required:true
    }
});

//Export The Created Model To Be Utilized In Routes
module.exports = mongoose.model('Animals',postSchema);
