const asyncHandler = require("express-async-handler");
const User = require("../models/userschema"); // USERSCHEMA DATA 
const bcrypt = require("bcrypt"); // HASHPASSWORD PACKAGE LB
const jwt = require("jsonwebtoken");


// register client 
const registerUser =  asyncHandler(async(req,res) =>{   
  const {username ,email, password,usertype} = req.body;
  if(!username || !email || !password){
    res.status(400);
    console.log(res);
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
    usertype
  });
  console.log(`user is created ${user}`);
  // to send a msg to user that they are registered it 
  if(!user){
    res.status(201).json({id: User.id, email: User.email})
  }else{
    res.status(400)
    console.log(res)
  }
    res.json(user);
});

const activeTokens = new Set();

// login client
const loginUser =  asyncHandler(async(req,res) =>{   
  const {email ,password} = req.body;
  if(!email || !password){
    res.status(400);
    throw new Error("All  field are required");
  }
  const user = await User.findOne({email});
  // comparenthe password to hashpassword
  if(user && (await bcrypt.compare(password, user.password))){
    const accessToken = jwt.sign({ // jwt token 
      user:{
        username: User.username,
        email:User.email,
        id: User.id,
      },
    },
    // this to token to user to have when they login expiresIn:"1m" // 
    process.env.ACCESS_TOKEN_SECRET,{expiresIn:"1h"}
    
    ); 
    
    res.status(200).json({accessToken});
  } else{
    res.status(401);
    throw new Error("email and password is not valid ")
  }
  // res.json({message:"register the user"});
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