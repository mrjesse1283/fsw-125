const express = require("express")
const app = express()

//fake data
const users = [
  {name: "Joe", age: 25, gender: "male"},
  {name: "Jeff", age: 76, gender: "male"},
  {name: "Jane", age: 22, gender: "female"},
  {name: "Bob", age: 35, gender: "male"}
    
]
//argument 1 is the end point
//argument 2 is the call back function
app.get("/users", (request, response) =>{
    response.send(users)
})
app.get("/", (request, response) =>{
    response.send("Welcome Home")
})
app.get("/hello", (request, response) =>{
    response.send("This is the hello Page")
})


        //Port   //callback function
app.listen(9000, () => {
    console.log("this is the loalhost:9000")
})