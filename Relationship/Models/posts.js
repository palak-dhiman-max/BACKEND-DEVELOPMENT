
//--------------one to squellions relationship------------------



const mongoose = require("mongoose");

//connecting db to js
main().then(()=>{console.log("connected")}).catch((err)=>{console.log(err)});
async function main (){
    await mongoose.connect("mongodb://127.0.0.1:27017/relation");
}


//------making user and posts tow documents and there is relation b/w them-------

//making order schema 

const userschema = mongoose.Schema({

         name :String,
         email:String
         
})

//creating collection user
const User = mongoose.model("User",userschema); 



//creating schema posts

const postschema = mongoose.Schema({

    content:String,
    likes:Number,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

//creating collection user
const Post = mongoose.model("Post",postschema); 

//inserting data

const add_data = async ()=>{

    // let user1 = new User({
    //     name:"palak",
    //     email:"palak@gmail.com"
    // });

    let data = await User.findById('6a12736595ebec9fb89dfd7c');

    let post2 = new Post({

        content:"bye hi world!" ,
        like:42,
    })

   post2.user = data;
   

   //for saving to db
//   await user1.save();
  await post2.save();

};

// add_data();

let show = async () => {
  let result= await Post.find({}).populate("user");
  console.log(result);
}


show();