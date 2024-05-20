const mongoose = require("mongoose");



const connectDB = async()=>{
 try{
  const connect = await mongoose.connect(process.env.URL , {useNewUrlParser: true,
    useUnifiedTopology: true});
  console.log("connection is successfull" ,
   connect.connection.host,  // this for host and name of database to connect or  not 
   connect.connection.name); 
 }
 catch(error){
  console.log(error);
  process.exit(1); //  to know ?
 }
};


module.exports = connectDB;