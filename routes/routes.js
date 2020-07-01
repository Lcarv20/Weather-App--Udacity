const express = require("express")
const router = express.Router()
require("dotenv").config()

//Date
const d = new Date()
const newDate = d.getDate() + "." + d.getMonth() + "." + d.getFullYear()
let projectData = [
	{
		City: "Vila Real",
		Date: newDate,
		Temperature: "16",
		Content: "Hellooo",
	},
	{
		City: "Porto",
		Date: newDate,
		Temperature: "23",
		Content: "lkasdkbasjkdasjkd",
	},
]

//OpenWeather API details
const api = {
	key: process.env.API_KEY,
	url: "https://api.openweathermap.org/data/2.5/weather?q=",
	units: "&units=metric",
}

//Get routes
router.get("/db", (req, res) => {
	res.send(projectData)
})

router.get("/api", (req, res) => {
	res.send(api)
})
//Post routes
router.post("/postData", (req, res) => {
	console.log(req.body)
	projectData += req.body
})

module.exports = router
