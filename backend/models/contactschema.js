const mongoose = require("mongoose");


const contactSchema = mongoose.Schema({
  name:{
    type:String,
    required:[true ,"please add the conact name "],
  },
  email:{
    type: String,
    required:[true , "please add the email"],
  },
 
  age:{
    type: String,
    required:[true, "please add the number"],
  },
  Aadhaar:{
    type: String,
    required:[true, "please add the country"],
  },
  state:{
    type: String,
    required:[true, "please add the state"],
  },
  city:{
    type: String,
    required:[true, "please add the city"],
  },
  address:{
    type:String,
    required:[true, "please add the address"],
  },
  country:{
    type:String,
    required:[true, "please add the country"],
  },
  slot:{
    type:String,
    required:[true, "please add the slot"],
  },
  time:{
    type:String,
    required:[true, "please add the Time"],
  },
 },
  { 
    timestamps: true,
  }
);

module.exports = mongoose.model("contact" ,contactSchema );