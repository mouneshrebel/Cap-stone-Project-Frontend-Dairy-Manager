

require('dotenv').config();



const express =require("express");
const db =require("./db/connect");

const app = express();
db();

app.get( "/" , (req,res) => {

    res.status(200).send ({mounesh : "Welcome to Mounesh Arkm Dairy Manager Web site"});
    

    

});


app.listen(5000, () =>{
    console.log("App is running on port 5000");
});