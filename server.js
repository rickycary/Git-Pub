// Import express
const { response } = require('express');
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

app.use("/static", express.static("static"))
app.use("/models", express.static("models"))


// Deliver a single static file
app.get("/staticfile", (reqest, response) => {
    response.sendFile("/Users/rickycary/SEI/deliverables/unit2/Git-Pub/static/index.html")
})

app.get("/drinks", (request, response) => {
    response.sendFile("/Users/rickycary/SEI/deliverables/unit2/Git-Pub/models/drinks.js")
})

app.get("/template", (request, response) => {
    response.render("first.ejs")
})


app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})