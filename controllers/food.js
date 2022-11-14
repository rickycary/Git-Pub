// Dependencies
const express = require('express');
const food = require('../models/foods');

// Router
const router = express.Router()

// Register routes w/ the router
router.get('/', (request, response) => {
    response.render("foods/index.ejs", {
        foods: food.getAll()
    })
})

// Export Router 
module.exports = router