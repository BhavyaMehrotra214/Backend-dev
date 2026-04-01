import fs from "fs"
const app = express();
app.set("view engine","ejs");
app.use("/static",express.static("public"))
app.get("/index",(req,res)=>{
       const files = fs.readdirSync("./public")
       res.render("index",{image:files});
})

app.listen(3000,()=>{
    console.log("server is running");
    
})