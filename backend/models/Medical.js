const mongoose = require ('mongoose');

const Schema =mongoose.Schema;
const medicalSchema = new Schema({
    vname :{
        type :String,
        required: true

    },

    zname :{
        type :String,
        required: true

    },
    animalID :{
        type :String,
        required: true

    },
    
    injID:{
        type:String,
        required:true

    },

    sinfo :{
        type :String,
        required: true

    }



})
const Medical = mongoose.model("Medical_Document",medicalSchema);
module.exports = Medical;