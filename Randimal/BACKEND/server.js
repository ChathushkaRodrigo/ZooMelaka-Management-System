const express =require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app =express();
const cors =require('cors');

//Import Routes
const MedicalRouts =require('./routes/medicals');

//App MiddleWare
app.use(bodyparser.json());
app.use(cors());
//Route MiddleWare
app.use(MedicalRouts);

//Import me later to dotEnv file
const PORT =8070;
//MongoDB Connect URL
const DB_URL ='mongodb+srv://Randi:Randi$123@itpproject.bznis.mongodb.net/medical_db?retryWrites=true&w=majority';


//Establish Connection with Mongoose Server --> ZooMelaka Cluster 
mongoose.connect(DB_URL,{
    useUnifiedTopology: true,
    useNewUrlParser:true
}).then(()=>{
    console.log("Mongoose Connection Successful");
}).catch((err)=>{
    console.log('DB Connnection Error',err);
})


//Port establish server
app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});

