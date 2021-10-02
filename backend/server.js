const express = require("express");
const app = express();
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const router = express.Router();
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const helmet = require('helmet');
const cors = require('cors');
const bodyparser = require('body-parser');


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

//MongoDB Connect URL
const DB_URL ='mongodb+srv://ZooDatabaseAdmin:melaka123@zoo-managment-system-cl.lbmt4.mongodb.net/ZooManagementSystem?retryWrites=true&w=majority';

const {
    HOST,
    PORT,
    SESS_SECRET,
    NODE_ENV,
    IS_PROD,
    COOKIE_NAME
  } = require("./config/config");
  const { MongoURI } = require("./config/database");
  const MAX_AGE = 1000 * 60 * 60 * 3; // Three hours
  // const IS_PROD = NODE_ENV === "production";
  

//Establish Connection with Mongoose Server --> ZooMelaka Cluster 
mongoose.connect(DB_URL,{
    useUnifiedTopology: true,
    useNewUrlParser:true
}).then(()=>{
    console.log("==================Mongoose Connection Successful===========================");
}).catch((err)=>{
    console.log('DB Connnection Error',err);
})

// setting up connect-mongodb-session store
const mongoDBstore = new MongoDBStore({
    uri: DB_URL,
    collection: "mySessions"
  });

// Express Bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Morgan setup
app.use(morgan("dev"));

// Express-Session
app.use(
  session({
    name: COOKIE_NAME, //name to be put in "key" field in postman etc
    secret: SESS_SECRET,
    resave: true,
    saveUninitialized: false,
    store: mongoDBstore,
    cookie: {
      maxAge: MAX_AGE,
      sameSite: false,
      secure: IS_PROD
    }
  })
);

app.use(helmet())

// Below corsOptions are for Local development
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Below corsOptions work in deployment as Docker containers
const corsOptionsProd = {
  origin: 'http://localhost',
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));


app.use("/api/users", require("./routes/users"));

//Port establish server
app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});