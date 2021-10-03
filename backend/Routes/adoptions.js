const router = require("express").Router();

let Adoption = require("../models/adoption.js");

//in "/student" url when direct to "student/add"
router.route("/adoption/add").post((req ,res) => {

    //body is the body-part in request which sends from frontend to backend 

    const animal_name = req.body.animal_name;
    const adoption_level = req.body.adoption_level;
    const payment_plan = req.body.payment_plan;
    const live_cam = req.body.live_cam;
    const adoption_date = req.body.adoption_date;
    const animal_id = req.body.animal_id;
    const aid = req.body.aid;
    const member_id = req.body.member_id;


    //initializing properties in request to a new object
    const newAdoption = new Adoption({
        animal_name, 
        adoption_level,
        payment_plan, 
        live_cam,
        adoption_date,
        animal_id,
        aid,
        member_id
    })

    newAdoption.save().then(() => {
        res.json("Adoption added");
    }).catch((err) => {
        console.log(err);
    })


} )

//to get employee details when view is opened in html
router.route("/adoption/").get((req, res)=> {
    Adoption.find().exec((err,adoptions) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingAdoptions:adoptions
        });
    });
        

})

//update one employee's data
//:id is meant to get value as id after /update

router.route("/adoption/update/:id").post(async (req, res) => {
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

router.route("/adoption/delete/:id").delete(async (req, res) => {
    //send delete method instead post or put
    let adoptionId = req.params.id;
    
    await Adoption.findByIdAndDelete(adoptionId)
    .then(() => {
        res.status(200).send({status: "adoption record deleted"});
    })

    .catch((err) => {
        console.log(err);
        res.status(500).send({status : "error with deleting user", error : err.message});

    })

})


//fetch one employee's data

router.route("/adoption/get/:id").get(async (req, res) => {

    let adoptionId = req.params.id;
    
    //making user object to assign userdetail to send to front end
    Adoption.findById(adoptionId, (err, adoption) => {
        if(err){
            return res.status(400).json({success: false, err});
        }

        return res.status(200).json({
            success:true,
            adoption
        });
    });
})

module.exports = router;