//The http requests for the Create, Retreive, Update and Delete are written within this file
//Import Express
const { response } = require('express');
const express = require('express');
//Import the user model that we have created
const Posts = require('../models/posts');
//Invoke  express.Router() to send requests to routes
const router = express.Router();
//Save Posts
router.post('/post/save', (req, res) => {
    let newPost = new Posts(req.body);
    newPost.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Posts Saved Successfully"
        });
    });
});

//Get Posts
router.get('/posts', (req, res) => {
    //Use find() function to point out our post
    Posts.find().exec((err, posts) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingPosts: posts
        });
    });
});

//Update Posts

router.put('/post/update/:id', (req, res) => {
    Posts.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err, post) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            return res.status(200).json({
                success: "Updated Successfully"
            });
        }
    );
});

//Delete Posts
router.delete('/post/delete/:id', (req, res) => {
    Posts.findByIdAndRemove(req.params.id).exec((err, deletedPost) => {
        if (err) return res.status(400).json({
            message: "Delete Successfull",
            err
        });
        return res.json({
            message: "Delete Successfull",
            deletedPost
        });
    });
});

// Export Module
module.exports = router;
// Use Postman Application To Test And Check Endpoints when the front-end is not yet implemented!