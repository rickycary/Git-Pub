// Dependencies
const express = require('express');
const food = require('../models/foods');

// Router
const router = express.Router()

// Register routes w/ the router
router.get('/', (request, response) => {
    response.send("Food")
})

// Export Router 
module.exports = router