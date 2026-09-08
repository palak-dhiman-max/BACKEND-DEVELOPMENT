 const express =require("express");
 const app=express();
 let port = 8080;

 //parssing data of request body (post)
 app.use(express.urlencoded({extended:true}));


 app.listen(port,(req,res)=>{
    console.log(`server is listening at port ${port}`)
 })

 app.get('/register',(req,res)=>{
    let {user} = req.query;
res.send(`standard get response ,Welcome ${user}`);
 })

  app.post('/register',(req,res)=>{
   console.log(req.body);
   let {user,password}=req.body;
res.send(`standard post response ,Welcome ${user}`);
 })