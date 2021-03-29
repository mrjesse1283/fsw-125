const express = require("express")
const app = express();
const bountyRouter = require("./routes/bounties.js")

//middleware
app.use(express.json());

//routes
app.use("/bounties", bountyRouter)

//server listen
app.listen(9000, () => {
    console.log("Lets get styling")
})