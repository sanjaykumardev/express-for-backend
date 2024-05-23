const asyncHandler = require("express-async-handler");
const User = require("../models/userschema"); // USERSCHEMA DATA 
const bcrypt = require("bcrypt"); // HASHPASSWORD PACKAGE LB
const jwt = require("jsonwebtoken");
const userschema = require("../models/userschema");


// register client 
const registerUser =  asyncHandler(async(req,res) =>{   
  const {username ,email, password, usertype, secretkey} = req.body;
  if(!username || !email || !password || !usertype){
    res.status(400);
    console.log(res);
  }

  if (usertype === "Admin" && !secretkey) {
    return res.status(400).json({ message: "Secret key is required for admin registration" });
  }
  // if user already means then it will execute this code 
  const userAvaliable = await User.findOne({email});
  if(userAvaliable){
    res.status(400);
    console.log(res,"email is already there");
  }
  // hashing the password in resgister
  const hashingPassword = await bcrypt.hash(password ,10);
  console.log("hashingpwassord :",hashingPassword);
  const user = await User.create({
    username,
    email,
    password : hashingPassword,
    usertype,
    secretkey
  });
  console.log(`user is created ${user}`);
  // to send a msg to user that they are registered it 
  if(!user){
    return res.status(500).json({ message: "User registration failed" });
  }
  res.status(201).json({ id: user.id, email: user.email });
});

const activeTokens = new Set();

// login client
const loginUser = asyncHandler(async (req, res) => {
  const { email, password, usertype } = req.body;
  if (!email || !password || !usertype) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const accessToken = jwt.sign(
    {
      user: {
        username: user.username,
        email: user.email,
        id: user.id,
        usertype: user.usertype,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1h" }
  );

  res.status(200).json({ accessToken });
});

  
const logout = asyncHandler(async(req,res) =>{
  const token  =   req.headers.authorization;
  
    if (token) {
      activeTokens.delete(token);
      res.json({ message: 'Logout successful' });
    } else {
      res.status(401).json({ message: 'Unauthorized - Token not provided' });
    }
  });

// private client 
const privateUser =  asyncHandler(async(req,res) =>{   
  res.json({message:"register the user"});
});

module.exports = { registerUser ,loginUser ,privateUser, logout};