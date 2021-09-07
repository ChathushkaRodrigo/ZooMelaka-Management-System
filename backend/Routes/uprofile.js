const express = require('express');
const profiles = require('../models/uprofile');

const Profiles = require('../models/uprofile');
const Profile = require('../models/uprofile');

const router = express.Router();

//Create profile
router.post('/profile/create',(req,res)=>{

    let newProfile = new Profiles(req.body);

    newProfile.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Profile Created successfully"
        });
    });
});

//get profile

router.get('/profiles',(req,res)=>{
    Profiles.find().exec((err,profiles) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingProfiles:profiles
        });
    });
});

//get a specific post

router.get('/profile/:id',(req,res) =>{
    
    //let profileId = req.params.id;

    Profile.findById(req.params.id,(err,profile) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            profile
        });
    });
});

//update posts

router.put('/profile/update/:id',(req,res)=>{
    Profiles.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
        
            return res.status(200).json({
                success:"updated Succesfully"
            });
        }
    );
});

//delete post

router.delete('/profile/delete/:id', (req,res)=>{
    Profiles.findByIdAndRemove(req.params.id).exec((err,deletedProfile) => {
        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull", deletedProfile
        });
    });
});

module.exports = router;   