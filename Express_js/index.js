 let express = require('express');
 const app = express();
//  console.log(app);

 let port =3000;

 app.listen(port ,()=>{
     console.log(`app listnening on port no ${port}`);
 })

//  app.use((req ,res)=>{
//     // console.log("new incoming request");
//     let obj = {
//         name:'apple',
//         color:'red'
//     }

//     // res.send('hello client');
//     // res.send(obj);

//     res.send("<h1>Fruits</h1> <ul><li>apple</li>  <li>mango</li> <li>orange</li> </ul>"
//     )
//  })


 //how to send diff response at different paths

//  app.get('/' ,(req,res)=>{

//     res.send("you contacted root path");
//  })

 
//  app.get('/apple' ,(req,res)=>{

//     res.send("you contacted apple path");
//  })

 
//  app.get('/orange' ,(req,res)=>{

//     res.send("you contacted orange path");
//  })

 
//  app.use((req,res)=>{

//     res.send("this path does not exist");
//  })



//path parameters

// app.get('/',(req,res)=>{

//   res.send("i am root");

// });


// app.get('/:username/:id',(req,res)=>{
//    //   res.send("hello");
//      console.log(req.params);
//      let {username,id}=req.params;
//      res.send(`<h1>welcome to page of  @${username} </h1>`);

// })

app.get('/search',(req,res)=>{

   console.log(req.query);
   let {q} =req.query;
   if(!q){
      res.send("nothing searched");
   }
   res.send(`search results for query ${q}`);
   // res.send("no results");
})