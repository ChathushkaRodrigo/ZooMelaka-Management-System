const router = require("express").Router();
const adoption = require("../models/adoption.js");
let Adoption = require("../models/adoption.js");

//in "/student" url when direct to "student/add"
router.route("/add").post((req ,res) => {

    //body is the body-part in request which sends from frontend to backend 

    const animal_name = req.body.animal_name;
    const adoption_level = req.body.adoption_level;
    const payment_plan = req.body.payment_plan;
    const live_cam = req.body.live_cam;
    const adoption_date = req.body.adoption_date;
    const animal_id = req.body.animal_id;
    const member_id = req.body.member_id;


    //initializing properties in request to a new object
    const newAdoption = new Adoption({
        animal_name, 
        adoption_level,
        payment_plan, 
        live_cam,
        adoption_date,
        animal_id,
        member_id
    })

    newAdoption.save().then(() => {
        res.json("Adoption added");
    }).catch((err) => {
        console.log(err);
    })


} )

//to get employee details when view is opened in html
router.route("/").get((req, res)=> {
    Adoption.find().then((adoptions) => {
        res.json(adoptions);
    }).catch((err)=>{
        console.log(err);
    })

})

//update one employee's data
//:id is meant to get value as id after /update

router.route("/update/:id").put(async (req, res) => {
    //put is to get exist data and replace with update data

    let adoptionId = req.params.id; //fetch id from url
    //d structure to fetch data from body
    const {animal_name, adoption_level, payment_plan, live_cam, adoption_date, animal_id, member_id} = req.body;

    const updateAdoption = {
        animal_name, 
        adoption_level, 
        payment_plan,
        live_cam,
        adoption_date,
        animal_id,
        member_id
    };
    
    const udpate = await Adoption.findByIdAndUpdate(adoptionId, updateAdoption)
    //findOne is to used find object by other than id(pk)

    .then(() => {
        res.status(200).send({status: "adoption record udpated"}); // to send that update is successful. 200 - success code

    })

    .catch((err) => {
        console.log(err); //1st error
        res.status(500).send({status : "error with updating data", error: err.message}); //2nd method to notify error

    })
})


//delete an employee

router.route("/delete/:id").delete(async (req, res) => {
    //send delete method instead post or put
    let adoptionId = req.params.id;
    
    await adoption.findByIdAndDelete(adopotionId)
    .then(() => {
        res.status(200).send({status: "adoption record deleted"});
    })

    .catch((err) => {
        console.log(err);
        res.status(500).send({status : "error with deleting user", error : err.message});

    })

})


//fetch one employee's data

router.route("/get/:id").get(async (req, res) => {

    let adoptionId = req.params.id;
    
    //making user object to assign userdetail to send to front end
    const user = await Adoption.findById(adoptionId)
    .then((adoption) => {
        res.status(200).send({status : "adoption record fetched", adoption}); //user is the object send here to pass user details

    })

    .catch((err) => {
        console.log(err.message);
        res.status(500).send({status : "error with fetching user", error : err.message});

    })
})

module.exports = router;