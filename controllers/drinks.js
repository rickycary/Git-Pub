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
// Show Route
//===================
router.get('/:id', (request, response) => {
    response.render('drinks/show.ejs', {
        drinks: drinks.getOne(request.params.id)
    })
})


//===================
// Export the router
//===================
module.exports = router