//Set express to run server and routes
const express = require("express");

//Start up and instanse of app
const app = express();

//Dependecies
const bodyParser = require("body-parser");

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS - To allow cross origin
const cors = require("cors");
app.use(cors());

//Serving statics
app.use(express.static("web"));

//Routes
const routes = require("./routes/routes");
app.use("/", routes);

//Server setup
const port = 3333;
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
