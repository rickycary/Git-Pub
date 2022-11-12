//===================
// Dependencies 
//===================
const { response } = require('express')
const express = require('express')
const drinks = require('../models/drinks')

//===================
// Create Router Object
//===================
const router = express.Router()

//===================
// Register routes with the router
//===================
router.get("/", (request, response) => {
    response.render('drinks/index.ejs', {
        drinks: drinks.getAll()
    })
})

//===================
// Export the router
//===================
module.exports = router

