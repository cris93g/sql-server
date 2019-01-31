/****** LOCAL SERVER ******/
//calls env to get info needed to connect to server
require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
routes = require("./routes/routes");
const massive = require("massive");
//creates server
const app = express();
//calls port which the server is gonna be run on
const port = process.env.port || 3001;
//pull routes from routes folder
routes(app);

app.use(json());
app.use(cors());
// Allows local server to utilize SQL commands within db folder
massive(process.env.CONNECTION_STRING)
	.then(dbInstance => {
		app.set("db", dbInstance);
		console.log("connected");
	})
	.catch(err => {
		console.log(err);
	});
// Runs the server on localhost:3001
app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});
