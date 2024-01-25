const express = require("express");
const router  = express.Router();
const {createContact,getContact,updateContact,getContacts,deleteContact} = require("../controllers/contactController")


router.post('/userdetails' , createContact);

router.get('/' ,getContact);

router.get('/:id' ,getContacts);

router.put('/:id' , updateContact);

router.delete('/:id' ,deleteContact);



module.exports = router;