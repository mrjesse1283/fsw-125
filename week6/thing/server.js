const express = require("express")
const app = express();
const toolRouter = require("./index")

//middleware
app.use(express.json());

//routes
app.use("/", toolRouter)

// app.use(err, req, res, next)

//server listen
app.listen(8000, () => {
    console.log("Yay I got it to work lol")
})
