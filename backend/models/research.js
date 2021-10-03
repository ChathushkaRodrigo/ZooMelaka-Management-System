const mongoose = require ('mongoose');

const Schema =mongoose.Schema;
const researchSchema = new Schema({
    name_of_scientist :{
        type :String,
        required: true

    },

    employee_id :{
        type :String,
        required: true

    },

    date_research_started :{
        type :String,
        required: true

    },
    date_research_ended :{
        type :String,
        required: true

    },
    
    catergory:{
        type:String,
        required:true

    },
    research_name:{
        type:String,
        required:true

    },
    
    animal_id:{
        type:String,
        required:true

    },


    research_information :{
        type :String,
        required: false

    }



})
const Research = mongoose.model("Research_Document",researchSchema);
module.exports = Research;