// Dependencies
const { response } = require('express');
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

// Show Route /foods/:id
router.get("/:id", (request, response) => {
    response.render('foods/show.ejs', {
        food: food.getOne(request.params.id)
    })
})

// Export Router 
module.exports = router