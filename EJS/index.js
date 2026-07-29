const express = require("express");
const app = express();
let port = 8080;
let path = require("path");
app.set("views" ,path.join(__dirname ,"/views"));
app.set("view engine" ,"ejs");
app.listen(port,(req,res)=>{
   
    console.log(`server is listening at port number ${port}`);

})

app.get('/',(req,res)=>{

    // res.send("this is root");
    //rendering ejs
    res.render("home.ejs");
})

app.get('/roll',(req,res)=>{

    let num =  Math.floor(Math.random() *6) + 1;
    res.render("roll.ejs" ,{num});
})


//instagram page 

app.get('/ig/:username',(req,res)=>{
    
    // let followers =["ram" ,"shyam","rohan"];
    let {username}=req.params;
    let data = require("./data.json");
    // console.log(data);

  
    let instadata = data[username];

      if(instadata){

            res.render("insta.ejs",{instadata});
       
    }else{
         res.render("error.ejs");
    }


    // res.render("insta.ejs",{followers});
})