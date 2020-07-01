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
const apiData = async () => {
	return await fetch("/api")
		.then((api) => api.json())
		.then((api) => console.log(api))
}

const postData = async function (url, data) {
	console.log(data)
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
		const newData = await response.json()
		console.log(newData)
	} catch (error) {
		console.log("Error", error)
	}
}

// postData("/postData", {
// 	Braga: {
// 		Date: 123545354,
// 		Temperature: "16",
// 		Content: "Hellooo",
// 	},
// })
