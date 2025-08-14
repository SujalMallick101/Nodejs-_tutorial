
const fs = require("fs")
//sync..
fs.writeFileSync("example.txt", "hello world")

// Async
fs.writeFile("example.txt", "hello world async", (err) => { })

const result = fs.readFileSync("./contacts.txt", "utf-8")
console.log(result);

fs.readFile("./contacts.txt", "utf-8", (err, result) => {
    if (err) {
        console.log("Error", err);
    } else {
        console.log(result);
    }
})


fs.appendFileSync("./example.txt", " this is me")

fs.appendFile("./example.txt", " this is me", (err) => {
    if (err) {
        throw err;
    }
    console.log('Text appended');
})

fs.unlink("./contacts.txt", (err) => {
    if (err) throw err
    console.log("File deleted");
}
)
