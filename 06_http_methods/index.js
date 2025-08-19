const http = require("http")
const fs = require("fs")
const url = require("url")
const myServer = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end()
    const log = `${Date.now()} : ${req.method} ${req.url} New req rec\n`
    const myUrl = url.parse(req.url, true)

    fs.appendFile("log.txt", log, (err) => {
        switch (myUrl.pathname) {
            case "/":
                if (req.method === 'GET')
                    res.end("home page")
                break

            case "/about":
                const userName = myUrl.query.myname
                res.end(`hi ${userName}`)
                break

            case '/signup':
                if (req.method === 'GET') {
                    res.end("This is a signup form")
                } else if (req.method === 'POST') {
                    //DB insertion
                    res.end("success")
                }
                break

            default:
                res.end("404 not found")
        }
    })
})

myServer.listen(8000, () => {
    console.log("server started");
})
