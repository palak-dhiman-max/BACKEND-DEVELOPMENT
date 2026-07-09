 const express = require("express");
 const app = express();
 const port = 8080;

 //for ejs
 let path = require("path");
 app.set("view engine" ,"ejs");
 app.set("views",path.join(__dirname,"/views"));

 //for css linking 
 app.use(express.static(path.join(__dirname ,"public")))

 // for request body
app.use(express.urlencoded({extended:true}));

//starting server
 app.listen(port,(req,res)=>{
    console.log("server is listening at port 8080");
 })

//ids

let {v4:uuidv4}=require("uuid");
 //data for blogs

 // using patch
 let override = require("method-override");
 app.use(override('_method'));


 let blogs = [
  {
    id:uuidv4(),
    userimg:  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=faces&fit=crop&h=200&w=200",
    title: "Getting Started with Web Development",
    content: "Web development is an exciting field where you can build amazing websites and applications. Start by learning HTML, CSS, and JavaScript. Then move to backend technologies like Node.js and Express. ",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    username: "PalakWrites"
  },
  {
      id:uuidv4(),
    userimg:  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=faces&fit=crop&h=200&w=200",
    title: "Why Consistency Beats Motivation",
    content: "Many people wait for motivation to start working, but consistency is what truly matters. Even if you work for just 30 minutes daily, it compounds over time and brings huge results. Discipline will always beat motivation.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
    username: "MindInk"
  },
  {  id:uuidv4(),
    userimg:  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&h=200&w=200",
    title: "My Journey into Programming",
    content: "When I started programming, I found it very confusing. But with practice and patience, things started making sense. Debugging errors taught me more than tutorials ever could. Keep learning and never give up.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    username: "CodeLearner"
  }
];
 

 //index route

 app.get("/blogs" ,(req,res)=>{

   
    res.render("index.ejs" , {blogs});
 })

 //create post

 app.get("/blogs/new",(req,res)=>{
  res.render("new.ejs");
 })

 app.post("/blogs",(req,res)=>{
    
    let content = req.body;
    content.id=uuidv4();
    blogs.push(content);
    res.redirect("/blogs");

 })

 //view post

 app.get("/blogs/:id",(req,res)=>{

  let {id} = req.params; 
    let blog = blogs.find((p)=> id === p.id );
    res.render("view.ejs",{blog});
 })

 //edit 
 app.get("/blogs/:id/edit",(req,res)=>{
     let {id} = req.params; 
    let blog = blogs.find((p)=> id === p.id );
    res.render("edit.ejs",{blog});
 })

 app.patch("/blogs/:id",(req,res)=>{

  let {id} = req.params; 
  let blog = blogs.find((p)=> id === p.id );
  let con = req.body;
  let newcontent =con.content ;
  blog.content = newcontent;
  res.redirect("/blogs");

 })

 //delete
 app.delete("/blogs/:id",(req,res)=>{

    let {id} = req.params; 
     blogs = blogs.filter((p)=> id != p.id );
     res.redirect("/blogs");
 })