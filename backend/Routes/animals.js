// The http Requests For The Create, Retrieve, Update And Delete Operations Are Coded!

//Import Express

const express = require('express');

//Import The Created User Model

const Posts = require('../models/animal');

//Invoke express.Router() To Send Requests To routes And Write http Requests

const router = express.Router();

//Save Posts

router.post('/animal/save',(req,res)=>{

//Instantiate Posts Via A Constructor

let newPost = new Posts(req.body);

newPost.save((err)=>{
    if(err){
        return res.status(400).json({
            error:err
        });
    }
        return res.status(200).json({
            success:"Posts Saved Successfully!"
        });
});

});

//Get A Specific Post

router.get("/animal/:id",(req,res) => {
    let postId  = req.params.id;
    Posts.findById(postId,(err,post) => {
        if(err){
            return res.status(400).json({
                success:false,err
            });
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});

//Get Posts

router.get('/animal',(req,res)=>{
    Posts.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

//Update Posts

router.put('/animal/update/:id',(req,res)=>{
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
                success:"Updated Successfully!"
            });
        }
    );
});

//Delete Posts

router.delete('/animal/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{
        if(err) return res.status(400).json({
            message:"Delete Unsuccesfull!",err
        });
        return res.json({
            message:"Deleted Successfully!",deletedPost
        });
    });
});

//Export

module.exports = router;