const express = require("express")
const router = express.Router()
const projectData = { 1: "Hello" }

//OpenWeather API details
const apiKey = "&appid=148d202ca6d85b81b4c9a74c19b95b6c"
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q="
const units = "&units=metric"

//Get routes
router.get("/", (req, res) => {
	res.send(`<h1>My first GET!</h1>`)
})

router.get("/db", (req, res) => {
	res.send(projectData)
})

module.exports = router
