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

module.exports = router;