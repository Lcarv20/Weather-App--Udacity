//Fetch all data (GET)
const allEntries = fetch("/db")
	.then((data) => data.json())
	.then((data) => console.log(data))
