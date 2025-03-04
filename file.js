const fs = require('fs')

const s = fs.readFileSync("./prac.txt","utf-8")

console.log(s)

console.log("Read File")