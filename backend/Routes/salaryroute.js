const express = require('express')
const Posts = require('../models/dailyTask');

const router = express.Router();

router.post('/post/savetask',(req,res)=>{

    let newPost = new Posts(req.body);

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });

});

router.get('/salaryroutestask',(req,res)=>{

    Posts.find().exec((err,posts) => {
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        })
    });
});

router.put('/salaryroute/updatetask/:id',(req,res) =>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
        
    );
});

router.delete('/salaryroute/deletetask/:id',(req,res) =>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
       
        if(err) return res.staus(400).json({
            message:"Delete unsuccessful",err
        });
        
        return res.json({
            message:"Delete Succesfull",deletedPost
        });
    }); 
});

router.get("/posttask/:id",(req,res) =>{
    
    let postId = req.params.id;

    Posts.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            post
        })
    })
})
module.exports = router;
