// read log file()
const fs = require("fs");
function readlogfile(){
    fs.readFile('../Loog/log.txt','utf-8',(err,data)=>{
        if(err) throw err
        console.log(data)
    })
}
function writefile(data){
    fs.writeFile("./output.txt",data, (err)=>{
        if(err) throw err
        console.log("file write success")
    });
};
function appendLogfile(data){
    fs.appendFile("../Loog/log.txt",data,(err)=>{
        if(err) throw err
        console.log("file append success")
    });
}
function deleteLogFile(){
    fs.unlink("./output.txt",(err)=>{
        if(err) throw err;
        console.log("file deleted");
    });
}
module.exports={
    readlogfile,
    writefile,
    appendLogfile,
    deleteLogFile
};
