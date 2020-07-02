//Data Fetch
const getData = async function (url) {
	const retrieveData = await fetch(url).then((data) => data.json())
	//.then((data) => console.log(data))

	try {
		console.log("Connection Successful:\n List of entries:", retrieveData)
		retrieveData.map((e) => {
			console.log("->", e["name"])
		})
		return retrieveData
	} catch (error) {
		document.getElementById("entryHolder").innerHTML =
			"An error ocurred while loading ... please reload the page"
		console.log("error", error)
	}
}

//Dev testing functions
function updateUI() {
	getData("/db").then((data) => {
		for (let entry of data) {
			printData(entry)
		}
	})
}

//Data Printer
function printData(entry) {
	const target = document.getElementById("entryHolder")
	const template = `
    <div class="w3-third w3-center w3-padding w3-border w3-border-white w3-round-large">
    <div id="local">Local: ${entry.name}</div>
    <div id="temperature">Temperature: ${entry.temperature}</div>
    <div id="description">Description: ${entry.description}</div>
	<div id="time">${entry.time}</div>
	<div id="feelings">Content: ${entry.feelings}</div>
    </div>`

	target.innerHTML += template
}

//post Data
document.getElementById("generate").addEventListener("click", function (e) {
	//Get data from form
	const zip = document.getElementById("zip").value
	const feelings = document.getElementById("feelings").value
	//Verifying if user typed data
	if (zip.length === 0) {
		alert("Please provide ZIP/Location")
		return
	} else if (feelings.length === 0) {
		alert("Please provide some content")
		return
	}
	postData("/postData", { zip, feelings })
		.then((entry) => {
			if (entry === undefined) {
				throw "ERRORR"
			}
			printData(entry)
		})
		.catch((err) => console.log("Wrong Address", err))
})

const postData = async function (url, data) {
	//console.log(data)
	const method = {
		method: "POST",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	}
	const response = await fetch(url, method)

	try {
		const newData = await response.json()
		//console.log(newData)
		return newData
	} catch (error) {
		//console.log("Error:", error)
		alert("Please enter a valid address!")
	}
}

document.onload = updateUI()
