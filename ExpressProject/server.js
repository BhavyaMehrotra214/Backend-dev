// const express = require("express");
// const app = express();
// const users=require('./data.js');
// const port = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('/home', (req, res) => {
//     res.send('Welcome to the Home Page!');
// });

// app.get("/users/:id", (req, res) => {
//   res.send(`Get user with ID ${req.params.id}`);
// });

// app.get("/products", (req, res) => {
//   res.send("Get all products");
// });

// app.delete("/users/:id", (req, res) => {
//   res.send(`Delete user with ID ${req.params.id}`);
// });

// app.post("/users", (req, res) => {
//   res.send("Create a user");
// });

// app.listen(3000,()=>{
//     console.log("server is running")
// })

const express = require('express');
const app = express();
const userData=require('./data.js');
const port = 3000;
console.log(userData);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/home', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.get('/users', (req, res) => {
    res.status(200).json(users);
});

app.get("/userage",(req,res)=>{
  let userGreaterThan25 = userData.filter((ele)=>  ele.age >25)
  console.log(userGreaterThan25)
  res.json(userGreaterThan25);
})

app.listen(port, () => {
    console.log('Server is running on http://localhost:3000');
});