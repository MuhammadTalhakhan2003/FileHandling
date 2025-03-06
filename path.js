const path = require("path")

// console.log(__dirname)

// console.log(__filename)
const filepath = path.join("college","classes","test.txt")
console.log(filepath)
const Parsing = path.parse(filepath)
const Resolve = path.resolve(filepath)
const extName =path.extname(filepath)
const basename = path.basename(filepath)
const directory = path.dirname(filepath)



console.log({Parsing,Resolve,extName,basename,directory,seperator:path.sep})

