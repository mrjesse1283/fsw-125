const express = require("express")
const app = express();
const menuRouter = require("./routes/router.js")
const morgan = require("morgan")

//middleware
app.use(express.json());
app.use(morgan("dev"))

//routes
app.use("/menu", menuRouter)

app.use((err, req, res, next) => {
    console.log(err);
     return res.send({ errMsg: err.message})

})

//server listen
app.listen(5000, () => {
    console.log("The bun is in the oven")
})