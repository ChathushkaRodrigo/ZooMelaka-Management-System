const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adoptionSchema = new Schema({
    
    animal_name: {
        type : String,
        required: true,
    },

    adoption_level : {
        type: String,
        required: true
    },

    payment_plan :{
        type: String,
        required : true
    },

    live_cam :{
        type: String,
        required : true
    },

    adoption_date :{
        type: String,
        required : true
    },

    animal_id :{
        type: String,
        required : true
    },

    aid :{
        type: String,
        required : true
    },

    member_id :{
        type: String,
        required : true
    }


})

const adoption = mongoose.model("adoption", adoptionSchema);

module.exports = adoption;

