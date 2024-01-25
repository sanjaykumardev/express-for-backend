const express = require("express");
const app  = express();
const dotenv = require("dotenv");
const errorHandler = require("./middleware/errorHandler");
const usercontact = require('./routes/contact');
const Userscontact = require("./routes/user");
const connectDB = require("./config/dbConnection");
const cors  = require("cors")
dotenv.config();


// port config to the server 
const port = process.env.PORT || 5001 ;
app.use(express.json()); // to pass the data to form client to server we need to use this 
app.use(cors({origin:["http://localhost:5173"]}));
// middleware for connect the client and server

app.use(errorHandler);
app.use('/api/contacts' , usercontact);
app.use('/api/users' , Userscontact);


connectDB();
app.listen(port ,()=>{
  console.log(`connected to port ${port}`)
});
