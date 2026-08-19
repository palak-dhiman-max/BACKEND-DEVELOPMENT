   const mongoose = require('mongoose');
 
  main().then(()=>{
     console.log("connected successfully");
  }).catch((err)=>{
     console.log(err);
  })
 
  async function main (){
     await mongoose.connect("mongodb://127.0.0.1:27017/whatsaap");
  }
 
 const userChat = new mongoose.Schema(
    {
        from:{
            type:String,
            required:true
        }

         , to:{
            type:String,
            required:true
        },

         msg:{
            type:String

        }

        , received:{
            type:Date,
            required:true
        }
    }
 );

 const Chat = mongoose.model("Chat",userChat);
 module.exports = Chat;