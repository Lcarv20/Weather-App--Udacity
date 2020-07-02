//Data Fetch
const getData = async function (url) {
	const connectDB = await fetch(url)
		.then((data) => data.json())
		.then((data) => data)

	try {
		console.log("Connection Successful:\n List of entries:")
		connectDB.map((e) => {
			console.log("->", e["City"])
		})
		return connectDB
	} catch (error) {
		document.getElementById("entryHolder").innerHTML =
			"An error ocurred while loading ... please reload the page"
		console.log("error", error)
	}
}

//Dev testing functions
getData("/db").then((data) => {
	for (let entry of data) {
		printData(entry)
	}
})

//Data Printer
function printData(entry) {
	const target = document.getElementById("entryHolder")
	const template = `
    <div class="w3-third w3-center w3-padding w3-border w3-border-white w3-round-large">
    <div id="City">Local: ${entry.City}</div>
    <div id="date">Date: ${entry.Date}</div>
    <div id="temp">Temperature: ${entry.Temperature}</div>
    <div id="content">Content: ${entry.Content}</div>
    </div>`

	target.innerHTML += template
}

//post Data

document.getElementById("generate").addEventListener("click", function (e) {
	//Get data from form
	const getZip = document.getElementById("zip").value
	const getFeelings = document.getElementById("feelings").value
	//Verifying if user typed data
	if (getZip.length === 0) {
		alert("Please provide ZIP/Location")
		return
	} else if (getFeelings.length === 0) {
		alert("Please provide some content")
		return
	}
	postData("/postData", { getZip, getFeelings })
})

const postData = async function (url, data) {
	//console.log(data)
	const method = {
		method: "POST",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	}
	const response = await fetch(url, method)

	try {
		const newData = await response.text()
		console.log(newData)
	} catch (error) {
		console.log("Error", error)
	}
}
