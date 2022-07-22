const express = require("express")

// Constants
const port = 8080
const HOST = "0.0.0.0"

// App
const app = express()
app.get("/", (req, res) => {
    if (process.env.CE_SERVICES) {
        let ce_services = JSON.parse(process.env.CE_SERVICES)
        res.send("Estos son los servicios vinculados: " + ce_services["cloud-object-storage"][0])
    } else {
        const msg = "No existe CE_SERVICES"
        res.send(msg)
    }
})

app.listen(port, HOST)
console.log(`Corriendo en http://${HOST}:${port}`)