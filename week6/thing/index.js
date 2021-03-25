const express = require("express")
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

const tools = [
    {
        tool: "Hammer ",
        true: true,
        genre: "hand",    
        _id: uuidv4()
    },
    {
        tool: "Drill",
        true: true, 
        genre: "power",      
        _id: uuidv4()
    },

]

router.get("/", (req, res) => {
    res.send(tools)
})

//get by Genre for QUERY
router.get("/search/genre", (req,res) => {
    console.log(req)
    const genre = req.query.genre
    const filteredTools = tools.filter(tool => tool.genre === genre)
    res.send(filteredTools)
})

router.post('/', (req, res) => {
    const newTool = req.body
    newTool._id = uuidv4()
    tools.push(newTool)
    res.send(`THE: ${newTool.thing} was successfully added to the thing thing!!!`)
})


module.exports = router 