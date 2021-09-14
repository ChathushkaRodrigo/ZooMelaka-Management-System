const express= require("express");
const { response } = require("express");
let Medical = require("../models/medical");


const router =express.Router();

//Save medical details 

router.post("/medical/add",(req,res)=>{

    let newMedical = new Medical(req.body);

    newMedical.save((err)=>{

        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:"Medical saved successfully "
        });

    });


});




//get medical details

router.get('/medical',(req,res)=>{

    Medical.find().exec((err,medical)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingMedical:medical
        });
    });
    

});




//Update Medical Details

router.put('/medical/update/:id',(req,res)=>{

    Medical.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,medical)=>{
        
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Success Update"
            });
        }
    );

});





//Delete Medical Details

router.delete('/medical/delete/:id',(req,res)=>{

    Medical.findByIdAndRemove(req.params.id).exec((err,deletedmedical)=>{

        if(err) return res.status(400).json({
            
        message :"Unsuccessful delete",err 
    });
        
        return res.status(200).json({
             message:"Success delete",deletedmedical
        });
    });
});




router.get("/medical/get/:id",(req,res) =>{
    let medicalId =req.params.id;
    Medical.findById(medicalId,(err,medical) =>{
        if(err){
            return res.status(400).json({succes:false,err})
        }
        return res.status(200).json({
            success:true,
            medical

        });

    });
   })
   module.exports = router;