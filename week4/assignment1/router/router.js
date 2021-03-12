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

//GET
router.get("/", (req, res) => {
    res.send(bounties)
})
// GET ONE
router.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyID
    const caughtBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(caughtBounty)
    // console.log(req)
})

//POST
router.post('/', (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`${newBounty.firstName} ${newBounty.lastName} was successfully added to the wanted list.`)
}) 

//WEEK4 ASSIGNMENT1
//DELETE 
router.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Bounty was caught sucessfully")
})

//PUT
router.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId  
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updateBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updateBounty)
})

module.exports = router 