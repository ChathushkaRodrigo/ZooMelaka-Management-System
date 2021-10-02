

const express= require("express");
const { response } = require("express");
let Research = require("../models/research");


const router =express.Router();

//Save research details 

router.post("/research/add",(req,res)=>{

    let newResearch = new Research(req.body);

    newResearch.save((err)=>{

        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:"Research saved successfully "
        });

    });


});




//get research details

router.get('/research',(req,res)=>{

    Research.find().exec((err,research)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingResearch:research
        });
    });
    

});




//Update research Details

router.put('/research/update/:id',(req,res)=>{

    Research.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,research)=>{
        
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Success Update"
            });
        }
    );

});





//Delete research Details

router.delete('/research/delete/:id',(req,res)=>{

    Research.findByIdAndRemove(req.params.id).exec((err,deletedresearch)=>{

        if(err) return res.status(400).json({
            
        message :"Unsuccessful delete",err 
    });
        
        return res.status(200).json({
             message:"Success delete",deletedresearch
        });
    });
});


// router.route("/get/:id").get(async (req,res) => {
//     let userId = req.params.id;
//     const user = await Research.findById(userId)
//     .then((research) => {
//         res.status(200).send({status:"User fetched",research});
//     }).catch((err) => {
//         console.log(err.message);
//         res.status(500).send({status: "Error with get user",error: err.message});
//     })
//     })



//  //get a specific research document
//  router.get("/post/:id",(req,res) =>{
//      let postId =req.params.id;
//      Research.findById(postId,(err,research) =>{
//          if(err){
//              return res.status(400).json({succes:false,err})
//          }
//          return res.status(200).json({
//              success:true,
//              research

//          });

//      });
//     })
//get a specific research document
router.get("/research/:id",(req,res) =>{
    let researchId =req.params.id;
    Research.findById(researchId,(err,research) =>{
        if(err){
            return res.status(400).json({succes:false,err})
        }
        return res.status(200).json({
            success:true,
            research

        });

    });
   })
   module.exports = router;