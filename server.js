const express =require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app =express();
const cors =require('cors');

//Import Routes
const bookingRoutes =require('./Routes/Bookings');

//App MiddleWare
app.use(bodyparser.json());
app.use(cors());
//Route MiddleWare
app.use(bookingRoutes);

//Import me later to dotEnv file
const PORT =8015;
//MongoDB Connect URL
const DB_URL ='mongodb+srv://ZooDatabaseAdmin:melaka123@zoo-managment-system-cl.lbmt4.mongodb.net/ZooManagementSystem?retryWrites=true&w=majority';


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




