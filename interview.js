const fs = require("fs")
const axios = require("axios")

fs.readFile("interview.txt","utf-8",(err,data)=>{
    if(err){
        console.log("it shows error")
      }
      else{
        console.log(data)
      }
})


axios.get('https://jsonplaceholder.typicode.com/todos/2')
    .then(response => console.log(response.data))
    .catch(error => console.error(error));


console.log('This will run before file reading and API request are complete.')




// fs.writeFile("interview.txt","Async programming123",(err,data)=>{
//           if(err){
//             console.log("it shows error")
//           }
//           else{
//             console.log(data)
//           }
// })


// fs.readFile("interview.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("it shows error")
//       }
//       else{
//         console.log(data)
//       }
// })


// console.log("Which line execute")