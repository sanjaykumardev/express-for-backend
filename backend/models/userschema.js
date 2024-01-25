const  mongoose = require("mongoose")

const Userdata =  mongoose.Schema({
  username:{
    type:String,
    required:[true , "enter the data "]
  },
  email:{
    type:String,
    required:[true , "enter the email"],
    unique :[true, "email is already their"]
  },
  password:{
    type:String,
    required:[true,"password is required"]
  },
  usertype:{
    type:String,
    required: true,
  },
},{
  timestampe: true,
}
);

module.exports = mongoose.model("user" ,Userdata);