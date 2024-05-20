const mongoose = require("mongoose");

const Userdata = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Enter the username"]
  },
  email: {
    type: String,
    required: [true, "Enter the email"],
    unique: [true, "Email is already taken"]
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  usertype: {
    type: String,
    required: true
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model("User", Userdata);
