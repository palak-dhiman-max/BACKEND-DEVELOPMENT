 const mongoose = require('mongoose')

//connecting js  with mongodb such that we can manipulate db using js
main().then(()=>{console.log("success");})
.catch((err)=>{console.log(err)});

 async function main() {

   await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
   
 }

 //make schema

 const userSchema = new mongoose.Schema(

    {
        name:String,
        email:String,
        age:Number    
    }
 );



 //to create a collection which has the schema as passed
//  const User = mongoose.model("User",userSchema);
//  const Employee = mongoose.model("Employee",userSchema);

 //inserting document into collection
//  const user2 = User({name:'silky',email:'silkyjj@gmail.com',age:19})
// const user3 = User.insertMany(
//   [
//     {name:'rohit',email:'rohitj@gmail.com',age:39},
//     {name:'mohit',email:'mohit@gmail.com',age:29},
  
//   ]
  
//   ).then((res)=>{console.log(res);})
//    .catch((err)=>{console.log(err);})

// User.find({}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })


// User.find({age:{$gt:20}}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })


// User.findOne({_id:'6a06e2cc3bb4d06e7f2fe6c6'}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })


// User.findById('6a06e2cc3bb4d06e7f2fe6c6').then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

// User.deleteOne({name:'rohit'}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

// User.find().then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

// User.findByIdAndDelete('6a06e263bb8169df7b9a9771').then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

// User.findOneAndDelete({age:29}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

// User.find().then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })


//make schema for books

const bookSchema = new mongoose.Schema(
  {
    title:{
      maxlength:5,
      type:String,
      required:true,
    },

    author:{
    type:String,
    lowercase:true
    }
     ,
    price:{
      type:Number,
      min:1
    }
    ,discount:{
      type:Number,
      default:5
    }
    ,

    category:{
      type:String,
      enum:["fiction","non-fiction"]
    }

  }
)

//defining structure of collection
const Book = new mongoose.model("Book",bookSchema);

//inserting values into collection
// const book1 = Book({
//   title:"honey comb",

//   price:12340
// })


// const book2 = Book({
//   title:"mathamatics",
//   author:"rd sharma",
//   price:3400,
//   category:"comics"
// })

// book2.save().then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

// book1.save().then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

// Book.find().then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

//updating

Book.findByIdAndUpdate('6a06fdc795ae2b5f2aa50028',{title:"bedcjfbrujfvjwvfujwbcje jfwburfvgdrbugfviwrbjk rihvwirbvirkw vrwigvrbgwird"},{runValidators:true}).then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err.errors.title.properties.message);
})