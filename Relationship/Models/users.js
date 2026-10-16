
//--------------one to few relationship------------------



const mongoose = require("mongoose");

//connecting db to js
main().then(()=>{console.log("connected")}).catch((err)=>{console.log(err)});
async function main (){
    await mongoose.connect("mongodb://127.0.0.1:27017/relation");
}


//------making user (parent) and adress(child) document-------

//making schema 

const schema = mongoose.Schema({
         
    username:String,
    address:[
        {
             _id : false,
            location:String,
            city:String
        }
    ]

})

//creating collection users
const User = mongoose.model("User",schema);

//inserting values
let fun = async ()=>{
    await User.insertMany([
        
        {
        username:"shraddha",
        address:[

          
            {
                 
                location:"gt road sector 32",
                city:"ambala"
            }

            ,
                  {
                                    
                    
                    location:"link road sector 56",
                city:"jaipur"
            }
        ]
    }

])
}

fun();