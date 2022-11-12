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
// Register middleware (In between step)
app.use((request, response, next) => {
    console.log(request.url)
    next()
})
app.use("/models", express.static("models"))
app.use(morgan('tiny'))
app.use('/drinks', drinksRouter)

//=============================================

// // Register a route (end step)
// //=============================================
app.get("/", (request, response) => {
    response.send('<h1>Welcome to the Gitput App</h1>')
})

// app.get("/drinks", (request, response) => {
//     response.render("/Users/rickycary/SEI/deliverables/unit2/Git-Pub/views/index.ejs")
// })

// app.get("/template", (request, response) => {
//     response.render("first.ejs")
// })
//=============================================


// Listen Port
//=============================================
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})
//=============================================
