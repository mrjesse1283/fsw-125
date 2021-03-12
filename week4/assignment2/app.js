const express = require("express")
const app = express();
const todoRouter = require("./router/router")

//middleware
app.use(express.json());

//routes
app.use("/todos", todoRouter)

//server listen
app.listen(8000, () => {
    console.log("All the tasks better be done")
})