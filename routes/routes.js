const express = require("express")
const router = express.Router()
const fetch = require("node-fetch")
require("dotenv").config()

//Time
let requestTime = function (req, res, next) {
	const d = new Date()
	req.requestTime = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} -> ${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
	next()
}

router.use(requestTime)

//Data holder
let projectData = []

//OpenWeather API details
const api = {
	key: process.env.API_KEY,
	url: "https://api.openweathermap.org/data/2.5/weather?q=",
	units: "&units=metric",
}

//Get routes
router.get("/db", (req, res) => {
	console.log(req.requestTime + "url" + req.url + " Method:" + req.method)
	res.send(projectData)
})

//Server Side data "fetch"
let fetchWeather = async (url, place, units, key) => {
	const weatherData = await fetch(url + place + units + key, {
		timeout: 5000,
	}).then((data) => data.json())

	try {
		let dataHolder = {
			temp: weatherData.main.temp,
			description: weatherData.weather[0].description,
			name: weatherData.name,
		}

		return dataHolder
	} catch (error) {
		console.log("MEGAERROR!!!!!", error)
	}
}

//Post routes
router.post("/postData", (req, res) => {
	let { zip, feelings } = req.body
	fetchWeather(api.url, zip, api.units, api.key)
		.then((data) => {
			//put on db
			let sender = {
				name: data.name,
				temperature: data.temp,
				description: data.description,
				time: req.requestTime,
				feelings,
			}
			projectData.push(sender)

			//send response to user
			res.send(sender)
		})
		.catch((err) => {
			console.log("Maszine going craze", err)
			res.send("Sorry, something went wrong")
		})
	console.log(req.requestTime + "url" + req.url + " Method:" + req.method)
})

module.exports = router
