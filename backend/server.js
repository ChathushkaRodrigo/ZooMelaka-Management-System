const express =require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app =express();
const cors =require('cors');

//Import Routes
const bookingRoutes =require('./Routes/Bookings');
const animalRoutes = require('./Routes/animals');
const enclosureRoutes = require('./Routes/enclosures');
const adoptionRouter = require("./Routes/adoptions");
const profileRoutes = require('./Routes/uprofile');
const shasPosts = require('./Routes/posts');
const postDailytast = require('./Routes/salaryroute');
const postProjects = require('./Routes/projects');
const researches =require('./Routes/researches');
const medical =require('./Routes/medicals');
const collaboration =require('./Routes/collaborations');

//App MiddleWare
app.use(bodyparser.json());
app.use(cors());
//Route MiddleWare
app.use(bookingRoutes);
app.use(animalRoutes);
app.use(enclosureRoutes);
app.use(adoptionRouter);
app.use(profileRoutes);
app.use(shasPosts);
app.use(postDailytast);
app.use(postProjects);
app.use(researches);
app.use(medical);
app.use(collaboration);
//Import me later to dotEnv file
const PORT =8015;
//MongoDB Connect URL
const DB_URL ='mongodb+srv://ZooDatabaseAdmin:melaka123@zoo-managment-system-cl.lbmt4.mongodb.net/ZooManagementSystem?retryWrites=true&w=majority';


//Establish Connection with Mongoose Server --> ZooMelaka Cluster 
mongoose.connect(DB_URL,{
    useUnifiedTopology: true,
    useNewUrlParser:true
}).then(()=>{
    console.log("==================Mongoose Connection Successful===========================");
}).catch((err)=>{
    console.log('DB Connnection Error',err);
})


//Port establish server
app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});