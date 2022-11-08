const express = require("express")
const app = express()

app.get('/', (request, response) => {
    response.send("Welcome to the Gitpub App!")
})

app.listen(3000, () => {
    console.log("The pub is listening")
})