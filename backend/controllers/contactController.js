const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactschema")

// createcontact 
const createContact =   asyncHandler (async(req,res) =>{
  const { name, age, Aadhaar,state,country,city,email, address,time, slot } = req.body;

  if(!name || !email ||!age || !Aadhaar || !state || ! country || !city ||!address ||!time || !slot ){
   res.status(400).json("not data is here");
   console.log(res);
  } 
  const user = await Contact.create({
        name,
        age,
        Aadhaar,
        state,
        country,
        city,
        email,
        address,
        time,
        slot,
  });
  res.status(201).json(user);
});

// get all contacts
const getContact =  asyncHandler(async(req,res) =>{    // it all contact of data 
 const user =  await Contact.find()
  res.status(200).json(user);
});

// get by id contact 
   const getContacts = asyncHandler(async(req,res) =>{   // it is id to contact
   const user = await Contact.findById(req.body.id); // missing the error code to update late 
   res.status(200).json(user);
});

// update by id 
  const updateContact =  asyncHandler(async(req,res) =>{
  const user = await Contact.findById(req.body.id)
  if(!user){
   res.status(404);
   console.log(res)
  }
// update the data 
  const updatecontact = await Contact.findByIdAndUpdate(
    req.body.id,
    req.body,
    {new : true}
  );
  res.status(200).json(updatecontact);
});


//delete by id
const deleteContact =  asyncHandler(async(req,res) =>{
  const user = await Contact.findByIdAndDelete(req.params.id);
  if(!user){
   res.status(404);
   console.log(res)
  }
  // await Contact.remove(req.params.id); // remove the data form the this  code
  res.status(200).json(user);
});



module.exports ={createContact
  ,getContact
  ,updateContact
  ,deleteContact
  ,getContacts
};