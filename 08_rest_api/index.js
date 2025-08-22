const express = require("express")
const users = require("./MOCK_DATA (1).json")
const fs = require("fs")
const { json } = require("stream/consumers")

const app = express()
const PORT = 8000

//Middleware
app.use(express.urlencoded({ extended: false }))

//routes
app.get('/api/users', (req, res) => {
    return res.json(users)
})

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id)
    return res.json(user)
})

app.post('/api/users', (req, res) => {
    const body = req.body
    users.push({ id: users.length + 1, ...body })
    fs.writeFile("./MOCK_DATA (1).json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "successfull", id: users.length })
    })
})

app.patch("/api/users/:id", (req, res) => {
    const id = Number(req.params.id)
    const body = req.body
    const user = users.find((user) => user.id === id)
    Object.assign(user, body)
    fs.writeFile('./MOCK_DATA (1).json', JSON.stringify(users), (err, data) => {
        return res.json({ status: "update", user })
    })
})

app.delete('/api/users/:id', (req, res) => {
    const id=Number(req.params.id)
    const index=users.findIndex((user)=>user.id===id)
    users.splice(index,1)
    fs.writeFile('./MOCK_DATA (1).json',JSON.stringify(users),(err,data)=>{
           return res.json({ status: "deleted",id })
    })
})

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
})