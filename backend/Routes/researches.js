const router = require("express").Router();
const { response } = require("express");
let Research = require("../models/Research");

router.route("/add").post((req,res)=>{
    const name =req.body.name;
    const catergory =req.body.catergory;
    const researcher_name =req.body.researcher_name;

    const newResearch =new Research({
        name ,
        catergory,
        researcher_name,
    })

    newResearch.save().then(()=>{
        res.json("Research Added");
    }).catch((err)=>{
        console.log(err);
    })

    
})

router.route("/").get((req,res)=>{

    Research.find().then((researches)=>{
        res.json(researches)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route("/update/:id").put(async(req,res)=>{
    let userID =req.params.id;
    const {name,catergory,researcher_name} = req.body;
    const updateResearch ={
        name,
        catergory,
        researcher_name
    }
    const update = await Research.findByIdAndUpdate(userID,updateResearch)
    .then(() => {
    res.status(200).send({status: "User update"})
}).catch((err) => {
    console.log(err);
    res.status(500).send({status:"Error with updating data",error:err.message});
    })
})

router.route("/delete/:id").delete(async (req,res) =>{
    let userId =req.params.id;
    await Research.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status:"User deleted"});
    }).catch((error) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user"})
    })
})

router.route("/get/:id").get(async (req,res) => {
    let userId = req.params.id;
    const user = await Research.findById(userId)
    .then((research) => {
        res.status(200).send({status:"User fetched",research});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error: err.message});
    })
    })


module.exports = router;
