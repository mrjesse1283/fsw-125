
const express = require("express")
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

const menu = [
    {
        name: "Cheescake",
        type: "Dessert",
        edible: true,
        flavors: [ "chocolate", "Strawberry" ],
        cost: 10,
        _id: uuidv4()
    },
    {
        name: "Flan",
        type: "Dessert",
        edible: true,
        flavors: [ "Cinnemon", "Honey" ],
        cost: 10,
        _id: uuidv4()
    },
    {
        name: "Chile",
        type: "Meal",
        edible: true,
        flavors: [ "Green", "red"  ],
        cost: 10,
        _id: uuidv4()
    }
]
//GET
router.get("/", (req, res) => {
    res.status(200).send(menu)
})
// GET ONE
router.get("/:menuId", (req, res) => {
    const menuId = req.params.menuId
    const newFood = menu.find(foodItem => foodItem._id === menuId)
    if(!newFood || Object.values(newFood) === 0 ) {
        const err = new Error( `item: ${menuId} not found`)
        res.status(500)
        return  next({errMsg: err.message})
    }   else {
        res.status(200).send(newFood)
    }

    // console.log(req)
})
//get by Genre for 
router.get("/search/type", (req,res) => {
    console.log(req)
    const type = req.query.type
    const filteredType= menu.filter(menu => menu.type === type)
    if(!type) {
        const err = new Error( `You must provide a type`)
        res.status(500)
        return next({ errMsg: err.message })
    }   
        res.status(200).send(filteredType)
    
})
        


//POST
router.post('/', (req, res) => {
    const newItem = req.body
    console.log(newItem)
    newItem._id = uuidv4()
    menu.push(newItem)
    res.status(201).send(newItem)
}) 
//DELETE 
router.delete("/:menuId", (req, res) => {
    const menuId = req.params.menuId
    const menuIndex = menu.findIndex(foodItem => foodItem._id === menuId)
    if(!menuId || menuIndex === -1) {
        const err = new Error( `ID not valid`)
        res.status(500)
        return next({ errMsg: err.message })
    }   else {
        menu.splice(menuIndex, 1)
        res.status(201).send("Your order is on its way")
    }
})


//PUT
router.put("/:menuId", (req, res) => {
    const menuId = req.params.menuId  
    const menuIndex = menu.findIndex(foodItem => foodItem._id === menuId)
    const updateMenu = Object.assign(menu[menuIndex], req.body)
    res.send(updateMenu)
})

module.exports = router 