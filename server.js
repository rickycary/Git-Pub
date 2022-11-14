// Install dotenv port
//=============================================
require("dotenv").config();
//=============================================


// Import dependencies
//=============================================
const { response } = require('express');
const express = require('express');
const morgan = require('morgan')
const drinksRouter = require("./controllers/drinks")
const foodRouter = require("./controllers/food")
//=============================================


// Create the application object
//=============================================
const app = express();
//=============================================


//=============================================
//Global Variables
const PORT = process.env.PORT || 3000
//=============================================


//=============================================
// Middleware
app.use("/models", express.static("models"))
app.use(morgan('tiny'))
app.use('/drinks', drinksRouter)
app.use('/foods', foodRouter)
//=============================================

// // Register a route (end step)
// //=============================================
app.get("/", (request, response) => {
    response.send('<h1>Welcome to the Gitput App</h1>')
})
//=============================================


// Listen Port
//=============================================
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})
//=============================================