const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("hello dev")
})

app.get("/user" ,(req,res)=>{
    res.send("User route")
})
app.get("/userdetail",(req,res)=>{
    //send json data
    res.json({name:"bhavya",age:21})
    res.status(200).json(user);
})

app.get("/about",(res,req)=>{
    res.send("about route")
})

app.get("/contact" ,(req,res)=>{
    res.send("contact route")
})

app.get("/users/:id", (req, res) => {
  res.send(`Get user with ID ${req.params.id}`);
});

app.get("/products", (req, res) => {
  res.send("Get all products");
});

app.delete("/users/:id", (req, res) => {
  res.send(`Delete user with ID ${req.params.id}`);
});

app.post("/users", (req, res) => {
  res.send("Create a user");
});

app.listen(3000,()=>{
    console.log("server is running")
})