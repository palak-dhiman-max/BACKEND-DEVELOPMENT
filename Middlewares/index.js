 const express = require("express");
 const app = express();
 const port = 8080;

 const errorhandler= require("./errorHandler");

// app.use( "/random",(req,res,next)=>{
//      console.log("hello i am middleware");
//     //  res.send("middleware");
//     next();
// })

//  app.listen(port,()=>{
//     console.log("server is listening at port 8080")
//  })

//  app.get("/",(req,res)=>{
//     res.send("hello i am root");
//  })

//   app.get("/random",(req,res)=>{
//     res.send("hello i am ramdom");
//  })

//now create a api middleware where access is denied when token is not passed in query string


// app.use( "/api",(req,res,next)=>{

//     let {token} = req.query;
//     console.log(token);
//     if(token === "givenaccess")
//     {
//         res.send("data");
        
//     }
  
//     else{
//         //  res.send("ACCESS DENIED");
//         throw  new Error("ACCESS DENIED");
//     }
  
// })

//  app.listen(port,()=>{
//     console.log("server is listening at port 8080")
//  })

//  app.get("/",(req,res)=>{
//     res.send("hello i am root");
//  })

//   app.get("/random",(req,res)=>{
//     res.send("hello i am ramdom");
//  })


//utility commands logger


// app.use( (req,res,next)=>{
// req.time =new  Date(Date.now()).toString();
// console.log(req.method, req.path ,req.hostname ,req.time);
// next();

// })

//  app.listen(port,()=>{
//     console.log("server is listening at port 8080")
//  })

//  app.get("/",(req,res)=>{
//     res.send("hello i am root");
//  })

//   app.get("/random",(req,res)=>{
//     res.send("hello i am ramdom");
//  })

// -----------------------error handling--------------------------------



// //error in this route
//  app.get("/err",(req,res)=>{
//     abcd = abcd;
//  })

//  //error handler middleware
//  app.use((err,req,res,next)=>{
//       console.log("error-1");
//       next(err);
      
//  })


//  app.use((err,req,res,next)=>{
//    console.log("--error2");
//    next(err);
//    // res.status(404).send(" page not found");
//  })

//  app.listen(port,()=>{
//     console.log("server is listening at port 8080")
//  })


// -----------------------Using error handling class--------------------------------


app.use( "/api",(req,res,next)=>{

    let {token} = req.query;
    console.log(token);
    if(token === "givenaccess")
    {
        res.send("data");
        
    }
  
    else{
        //  res.send("ACCESS DENIED");
        throw  new errorhandler(404,"ACCESS DENIED");
    }
  
})

app.get("/err",(req,res)=>{
   abcd = abcd;
})

app.use((err,req,res,next)=>{
   let {status=500 ,message="some error"}=err;
   res.status(status).send(message);
})
 app.listen(port,()=>{
    console.log("server is listening at port 8080")
 })
