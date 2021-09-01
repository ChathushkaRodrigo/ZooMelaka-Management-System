const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const medicalSchema = new Schema({

    vetname : {
        type : String,
        required :true
    },
    zkname : {
        type : String,
        required : true
    },
    animalid : {
        type : String,
        required : true
    },
    injid : { 
        type : number,
        required : true
    },
    surgeryinfo : {
        type : String,
        required : true
    }


})

const Medical = mongoose.model("MedicalRecord",medicalSchema);

module.exports = Medical;