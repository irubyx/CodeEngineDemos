const express = require("express")

// Constants
const port = 8080
const HOST = "0.0.0.0"

// App
const app = express()
app.get("/", (req, res) => {
    const msg = process.env.persona ? process.env.persona : 'world'
    res.send(`Hello ${msg}!`)
})

app.listen(port, HOST)
console.log(`Corriendo en http://${HOST}:${port}`)
