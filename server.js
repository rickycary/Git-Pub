// Import express
const express = require('express');
// Create the application object
const app = express();

// Register middleware (In between step)
app.use((request, response, next) => {
    console.log(request.url)
    next()
})

// Register a route (end step)
app.get("/", (request, response) => {
    response.send('<h1>Welcome to the Gitput App</h1>')
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})