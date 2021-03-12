const express = require("express")
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

const todos = [
    {
        task: "Clean",
        location: "Garage",
        _id: uuidv4()
    },
    {
        task: "Mow",
        location: "Front Lawn",
        _id: uuidv4()
    },
    {
        task: "Paint",
        location: "Fence",
        _id: uuidv4()
    }
]

//routes
// bountyRouter.use("/todos", require("./router/router.js"))

//GET
router.get("/", (req, res) => {
    res.send(todos)
})
// GET ONE
router.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const getTodo = todos.find(task => task._id === todoId)
    res.send(getTodo)
    // console.log(req)
})

//POST
router.post('/', (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send("Task was successfully added to the Honey do list.")
}) 

//WEEK4 ASSIGNMENT1
//DELETE 
router.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(task => task._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("The job was done successfully... I hope")
})

//PUT
router.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId  
    const todoIndex = todos.findIndex(task => task._id === todoId)
    const updateTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updateTodo)
})

module.exports = router 