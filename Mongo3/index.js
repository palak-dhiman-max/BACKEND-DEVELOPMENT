 //basic setup
 const express = require('express');
 const app = express();
 const port =8080;
 const path = require('path');

 const method = require('method-override');
 app.use(method('_method'));

 app.set("view engine","ejs");
 app.set("views",path.join(__dirname,"/views"));

 app.use(express.static(path.join(__dirname,"/public")));
 app.use(express.urlencoded({extended:true}));
 app.use(express.json());

 //connect db with js
  const mongoose = require('mongoose');

 main().then(()=>{
    console.log("connected successfully palak");
 }).catch((err)=>{
    console.log(err);
 })

 async function main (){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsaap");
 }

 //requiring from chat.js where is schema defined
const Chat = require("./Model/chat.js");

//start server

app.listen(port,()=>{
 console.log("server is listening at port 8080");
})

//index route
app.get("/chats", async(req,res)=>{

   let chats =  await Chat.find();
   res.render("chat.ejs",{chats});
   //  res.send("working");

  
})

// for adding new chat
app.post("/chats/newchat", async(req,res)=>{

   console.log("working");
   console.log(req.body);
     let{from , msg , to } = req.body;

    let newchat =  Chat({
      from:from,
      msg:msg,
      to:to,
      received:new Date()

     })
   await newchat.save()
     res.redirect("/chats");
})

app.get("/chats/new",(req,res)=>{
   res.render("new.ejs");
})

//for editting and updating chat

app.get("/chats/:id",async(req,res)=>{

   let {id} = req.params;
   
  let chat =await Chat.findById(`${id}`)
 
   res.render("edit.ejs",{chat});
})

app.patch("/chats/:id", async (req,res)=>{

   let {id} = req.params;
   let {msg} = req.body;
   await Chat.findByIdAndUpdate(`${id}`,{msg:msg},{new:true});
   res.redirect("/chats");

})

app.delete("/chats/:id",async(req,res)=>{

  let {id}=req.params;
  await Chat.findByIdAndDelete(`${id}`);
  res.redirect("/chats");

})

