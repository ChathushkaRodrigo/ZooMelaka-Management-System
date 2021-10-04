const mongoose = require('mongoose');
const bookingSchema =new mongoose.Schema({

    CustomerName: {
        type:String,
        required:true
    },
    CustomerEmail:{
        type :String,
        required :true
    },
    MobileNumber:{
        type :String,
        required :true
    },
    TourOption:{
        type :String,
        required :true
    },  
    Date:{
        type :String,
        required :true
    },
    Time:{
        type :String,
        required :true
    },
    TourGuideName:{
        type :String,
        required :true
    },
    MemberID:{
        type:String,
        required:true
    }


});

module.exports=mongoose.model('Tour Bookings',bookingSchema);