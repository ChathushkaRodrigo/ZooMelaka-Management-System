const mongoose = require ('mongoose');

const Schema =mongoose.Schema;
const collaborationSchema = new Schema({
    research_feild :{
        type :String,
        required: true

    },

    research_topic :{
        type :String,
        required: true

    },
    name :{
        type :String,
        required: true

    },
    
    email:{
        type:String,
        required:true

    },
    contact_no:{
        type:String,
        required:true

    },

    zoological_institution :{
        type :String,
        required: true

    }



})
const Collaboration = mongoose.model("Collaboration_Document",collaborationSchema);
module.exports = Collaboration;