const express = require("express")
const router = express.Router()
require("dotenv").config()

let projectData = [
	{
		City: "Vila Real",
		//Date: newDate,
		Temperature: "16",
		Content: "Hellooo",
	},
	{
		City: "Porto",
		//Date: newDate,
		Temperature: "23",
		Content: "Alahkazahm",
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

//Time
var requestTime = function (req, res, next) {
	const d = new Date()
	req.requestTime = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} -> ${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`
	next()
}

router.use(requestTime)

router.get("/time", function (req, res) {
	var responseText = "Hello World!<br>"
	responseText += "<small>Requested at: " + req.requestTime + "</small>"
	console.log("requested at ", req.requestTime)
	res.send(responseText)
})

//Post routes
router.post("/postData", (req, res) => {
	console.log(req.body)
	res.send("Post recieved at: " + req.requestTime)
})

module.exports = router
