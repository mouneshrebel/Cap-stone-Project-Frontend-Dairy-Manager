const mongoose = require("mongoose");

const db = async () =>{
   try{
    await mongoose.connect(process.env.MONGO_URL);

    console.log("DB connection has been establised .........")

    console.log("DB connection has been mounesh .........")
    



   } catch(error) {
    console.log("Error while connecting DB", error);
   }
};
module.exports = db;