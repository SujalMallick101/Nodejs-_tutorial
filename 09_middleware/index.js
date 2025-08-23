const express = require("express")
const app = express()
const PORT = 8000

//Middleware
app.use((req,res,next)=>{
    console.log("request method:",req.method)
    console.log("request url:",req.url)
    next()
})

//Rooutes
app.get('/',(req,res)=>{
    return res.send("hello middleware")
})


app.listen(PORT, () => {
    console.log(`server started at port :${PORT}`)
})