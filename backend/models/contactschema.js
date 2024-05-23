const mongoose = require("mongoose");


const contactSchema = mongoose.Schema({
  name:{
    type:String,
    required:[true],
  },
  email:{
    type: String,
    required:[true],
  },
 
  age:{
    type: String,
    required:[true],
  },
  Aadhaar:{
    type: String,
    required:[true],
  },
  state:{
    type: String,
    required:[true],
  },
  city:{
    type: String,
    required:[true],
  },
  address:{
    type:String,
    required:[true],
  },
  country:{
    type:String,
    required:[true],
  },
  slot:{
    type:String,
    required:[true],
  },
  time:{
    type:String,
    required:[true],
  },
 },
  { 
    timestamps: true,
  }
);

module.exports = mongoose.model("contact" ,contactSchema );