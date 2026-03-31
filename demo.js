import express from 'express';
import cookieParser from 'cookie-parser';
import JsonWebTokenError from 'jsonwebtoken';
const app = express();

app.use(cookieParser('my-super-secret-key'));

const authmiddleware = (req,res,next)=>{
    if(!req.cookies.token){
        res.send('invalid user')
        return;
}
const token = req.cookies.token;
const decode = JsonWebTokenError.verify(token,"qweertyuiop");
req.user=decode;
next();
}
app.get('/set-cookie',(req,res)=>{
    let user = {
        name:"rohan",
        email: "rohan@gmail.com"
    }
    const token =JsonWebTokenError.sign(user,"qwertyuiop",{expiresIn:"1h"});
    console.log(token);
    res.cookie('token',"token",{httpOnly:true});
    res.send('cookie has been set');
});

app.get("/get-cookie",authmiddleware,(req,res)=>{
    const user = req.user;
    res.send('Cookie value: ${user.name}');
    //const token = req.cookies.token;
    //if(!req.cookies.name){
     //   return res.send("invalid user")
    //}
    const decode = JsonWebTokenError.verify(token,"qwertyuiop")
    res.send('cookie value: ${decode.name}');
})

app.get("/dashboard",(req,res)=>{
    const user = req.user
    console.log(user)
    res.send('welcome to your dashboard,${user.name}!');
});
app.get("/profile",authmiddleware,(req,res)=>{
    //if(!req.cookies.name){
    //    return res.send("invalid user")
    //}
    const name = req.cookies.token;
    const decode = JsonWebTokenError.verify(token,"qwertyuiop")
    console.log(decode);

    res.send('welcome to user profile,${decode.name}');
})

app.get("/logout",authmiddleware,(req,res)=>{
    res.clearCookie("name");
    res.send("you have been logged out!");
});

app.listen(3000,()=>console.log('server is running on port'));