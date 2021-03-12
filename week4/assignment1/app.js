const express = require("express")
const app = express();
const bountyRouter = require("./router/router")

//middleware
app.use(express.json());

//routes
app.use("/bounties", bountyRouter)

//server listen
app.listen(9000, () => {
    console.log("Come to the port if you want to live!")
})