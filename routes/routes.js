const express = require("express")
const router = express.Router()
require("dotenv").config()

//Date
const d = new Date()
const newDate = d.getDate() + "." + d.getMonth() + "." + d.getFullYear()
const projectData = {
	Date: newDate,
	Temperature: "16",
	Content: "Hellooo",
}

//OpenWeather API details
const apiKey = process.env.API_KEY
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q="
const units = "&units=metric"

//Get routes
router.get("/", (req, res) => {
	res.send(projectData)
})

router.get("/db", (req, res) => {
	res.send(projectData)
})

module.exports = router
