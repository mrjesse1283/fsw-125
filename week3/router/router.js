const express = require("express")
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

const bounties = [
    {
        firstName: "Darth ",
        lastName: "Vader",
        living: true,
        bounty: 100,
        _id: uuidv4()
    },
    {
        firstName: "Luke",
        lastName: "Skywalker",
        living: true,
        bounty: 100,
        _id: uuidv4()
    },
    {
        firstName: "Han",
        lastName: "Solo",
        living: true,
        bounty: 100,
        _id: uuidv4()
    }
]

//routes
// bountyRouter.use("/bounties", require("./router/router.js"))

router.get("/", (req, res) => {
    res.send(bounties)
})

router.post('/', (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4
    bounties.push(newBounty)
    res.send(`object: ${newBounty.firstName} was successfully added to the wanted list.`)
})


module.exports = router 