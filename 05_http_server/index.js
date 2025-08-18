const http = require("http")
const fs=require("fs")
const myServer = http.createServer((req, res) => {
    const log=`${Date.now()} : ${req.url} New req rec\n`
    fs.appendFile("log.txt",log,(err)=>{
        switch(req.url){
            case "/":
                res.end("home page")
                break

            case "/about":
                res.end("i am sujal mallick")
                break

            default:
                res.end("404 not found")
        }
    })
})

myServer.listen(8000, () => {
    console.log("server started");
})