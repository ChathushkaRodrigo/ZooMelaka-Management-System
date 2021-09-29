

const express= require("express");
const { response } = require("express");
let Collaboration = require("../models/collaboration");


const router =express.Router();

//Save collaboration details 

router.post("/collaboration/add",(req,res)=>{

    let newCollaboration = new Collaboration(req.body);

    newCollaboration.save((err)=>{

        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:"Collaboration request saved successfully "
        });

    });


});




//get booking details

router.get('/collaboration',(req,res)=>{

    Collaboration.find().exec((err,collaboration)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingCollaboration:collaboration
        });
    });
    

});



   module.exports = router;