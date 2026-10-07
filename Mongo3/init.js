
  //connect db with js
  console.log("hello how are you");
   const mongoose = require('mongoose');

   //requiring from chat.js where is schema defined
 const Chat = require("./Model/chat.js");

 
  main().then(()=>{
     console.log("connected successfully palk");
  }).catch((err)=>{
     console.log(err);
  })
 
  async function main (){
     await mongoose.connect("mongodb://127.0.0.1:27017/whatsaap");
  }
 
  


 const allchats = 
     [
  {
    from: "Palak",
    to: "Riya",
    msg: "Hey, how are you?",
received: new Date()
  },
  {
    from: "Aman",
    to: "Palak",
    msg: "Project complete ho gaya kya?",
    received: new Date()
  },
  {
    from: "Neha",
    to: "Karan",
    msg: "Meeting at 5 PM.",
received: new Date()
  },
  {
    from: "Rohit",
    to: "Simran",
    msg: "Notes bhej dena.",
    received: new Date()
  },
  {
    from: "Ankit",
    to: "Palak",
    msg: "MongoDB install ho gaya.",
received: new Date()
  },
  {
    from: "Palak",
    to: "Aditi",
    msg: "Assignment submit kar diya.",
    received: new Date()
  }
];


 
  Chat.insertMany(allchats);


