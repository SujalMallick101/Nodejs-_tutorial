const fs=require('fs')

console.log(1);
//sync-blocking
const result=fs.readFileSync("abc.txt","utf-8")
console.log(result);


//async-non blocking
fs.readFile("abc.txt","utf-8",(err,result)=>{
    console.log(result);
})

console.log(2);

