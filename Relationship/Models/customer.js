
//--------------one to many relationship------------------

const mongoose = require("mongoose");

//connecting db to js
main().then(()=>{console.log("connected")}).catch((err)=>{console.log(err)});
async function main (){
    await mongoose.connect("mongodb://127.0.0.1:27017/relation");
}


//------making customer and order tow documents and there is relation b/w them-------

//making order schema 

const orderschema = mongoose.Schema({

         item :String,
         price:Number
})



//creating collection order
const Order = mongoose.model("Order",orderschema);

//inserting values
// let fun = async ()=>{
//     await Order.insertMany(
//         [
//             {
//                 item:"chips",
//                 price:10
//             },
//             {
//                 item:"pizza",
//                 price:999
//             }
//         ]
//     )
// }

// fun();

// making schema for customer
const customerschema = mongoose.Schema({
    
    name:String,
    order:[
        {
          type: mongoose.Schema.Types.ObjectId,
          ref:"Order"
        }
      
    ]
})

//deleting customer (isko schema create karne ke baad or model create karne se pahle banate hai)
customerschema.post("findOneAndDelete",async(customer)=>{
        
   if(customer.order.length){

    console.log("------");
    console.log(customer);
    
    await Order.deleteMany({_id: {$in : customer.order}});

   }
})

//creating collection customer
const Customer = mongoose.model("Customer",customerschema);




//inserting values 
const func = async()=>{


    let obj1 = await Order.findOne({item:"chips"});
    let obj2 =await Order.findOne({item:"pizza"});

    await Customer.insertMany([

       
        {
            name:"palak",
            order:[
                obj1 , obj2
            ]
        }
    ])
}

// func();

//deleting customer and it's order also delete 

let deleteData = async()=>{

   let result= await Customer.findByIdAndDelete('6a12b746e1cbc4b2ab7686b2');
   console.log(result);
}

deleteData();