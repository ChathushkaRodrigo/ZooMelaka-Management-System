const mongoose = require ('mongoose');

const Schema =mongoose.Schema;
const researchSchema = new Schema({
    name :{
        type :String,
        required: true

    },
    catergory:{
        type:String,
        required:true

    },
    researcher_name:{
        type:String,
        required:true

    }

})
const Research = mongoose.model("Research_Document",researchSchema);
module.exports = Research;