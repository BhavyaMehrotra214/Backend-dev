//import fs model
//const fs = require("fs");

//const read = (err,data)=>{
//    if(err) throw err
//    console.log(data)
//}
///fs.readFile('./log.txt','utf-8',read)

//console.log("first")

//fs.readFile('./log.txt','utf-8',(err,data)=>{
//    if(err) throw err
//    console.log(data)
//})

//const data= fs.readFileSync('./log.txt','utf-8');
//console.log(data)

//write file

//const data = "this is a new function"
//fs.writeFile('./output.txt',data,(err)=>{
//    if(err) throw err
//    console.log("file write success")
//})

//fs.appendFile('./output.txt',"\nthis is new",(err)=>{
//    if(err) throw err;
//    console.log("txt is added")
//})

//fs.unlinkSync('./output.txt')

//console.log("end")
// readLogFile()
//writeFile("new log data")
//appendLogFile("this is appended log data")
// deleteLogFile()

//const path = require("path");
//const absolutePath = path.resolve("./log.txt")
//console.log(absolutePath)
//console.log(__dirname)
//console.log(path.basename('./notes/log.txt')) // filename - log
//console.log(path.extname('./notes/log.txt')) // filename -.txt

//const joinPath = path.join(__dirname, "notes","log.txt");
//console.log(joinPath)

//const pathParse = path.parse(joinPath)
//console.log(pathParse)

//const filePath = path.join(__dirname,"Loog", "log.txt")
//const data = fs.readFileSync(filePath,"utf-8");
//console.log(data)

//const http = require("http")

//const server = http.createServer((req,res)=>{
//    console.log(req)
//    res.end("hello")
//})

//server.listen(3000,()=>{c
//     console.log("server is running on port",3000)   
//})


const{readlogfile,writefile,appendLogfile,
    deleteLogFile} = require("./app");

readlogfile();
writefile("this is a new function");
appendLogfile("this is appended log data");
deleteLogFile();
