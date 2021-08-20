const express = require('express');
const Booking = require('../Models/Bookings');


const router =express.Router();

//Save booking details 

router.post('/booking/save',(req,res)=>{

    let newBooking = new Booking(req.body);

    newBooking.save((err)=>{

        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:"Booking saved successfully "
        });

    });


});


//get booking details

router.get('/booking',(req,res)=>{

    Booking.find().exec((err,booking)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingBookings:booking
        });
    });
    

});


//Update Bookig Details

router.put('/booking/update/:id',(req,res)=>{

    Booking.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,booking)=>{
        
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Success Update"
            });
        }
    );

});


//Delete Booking Details

router.delete('/booking/delete/:id',(req,res)=>{

    Booking.findByIdAndRemove(req.params.id).exec((err,deletedBooking)=>{

        if(err) return res.status(400).json({
            
        message :"Unsuccessful delete",err 
    });
        
        return res.status(200).json({
             message:"Success delete",deletedBooking
        });
    });
});





module.exports=router;