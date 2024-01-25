const express = require("express");
const {registerUser , privateUser,loginUser ,logout} = require("../controllers/usercontroller");

const router  = express.Router();

router.post("/register" ,registerUser);


router.post("/login" ,loginUser );



router.delete("/logout" , logout  ) 

// Protector route
router.get('/protected', (req, res) => {
  res.json({ message: 'This is a protected route' });
});


router.get("/current" ,privateUser);


module.exports = router;