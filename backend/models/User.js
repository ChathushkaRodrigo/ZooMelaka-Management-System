const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fName:{
    type: String,
    required:true
  },
lName:{
    type:String,
    required:true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
