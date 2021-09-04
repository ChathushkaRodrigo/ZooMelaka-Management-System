const router = require("express").Router();
let Medical = require("../models/Medical");

router.route("/add").post((req,res)=>{


    const vetname = req.body.vetname;
    const zkname = req.body.zkname;
    const animalid = req.body.animalid;
    const injid = Number(req.body.injid);
    const surgeryinfo = req.body.surgeryinfo;

    const newMedical = new Medical({
        vetname,
        zkname,
        animalid,
        injid,
        surgeryinfo
    })

    newMedical.save().then(()=>{
        res.json("Medical Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{
    
    Medical.find().then((medicals)=>{
        res.json(medicals)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req, res) =>{

    let userId = req.params.id;
    const {vetname,zkname,animalid,injid,surgeryinfo} = req.body;

    const updateMedical = {
        vetname,
        zkname,
        animalid,
        injid,
        surgeryinfo
    }

    const update = await Medical.findByIdAndUpdate(userId, updateMedical)
    .then(() => {
        res.status(200).send({status: "Record Updated", user: update})

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })  
})

router.route("/delete/:id").delete(async (req,res) => {
let userId = req.params.id;

await Medical.findByIdAndDelete(userId)
.then(() => {
    res.status(200).send({status: "Record Updated", user: update})

}).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Medical.findById(userId)
    .then(() => {
        res.status(200).send({status: "User fetched", user: user})

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});



    })
})

module.exports = router;