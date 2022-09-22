const express = require("express");
const cors = require("cors")

const app = express();

const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
	res.status(200).send({
		message: "Welcome to Math Challenge",
	});
});

app.get("/random", (req, res) => {
	res.status(200).send({
		num1: Math.ceil(Math.random() * 10),
		num2: Math.ceil(Math.random() * 10),
	});
});

app.listen(PORT, () => {
	console.log("app running");
});
