const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const PORT = process.env.PORT;
const uri = process.env.MONGO_URL;

const app = express();

app.listen(PORT, () => {
	console.log(`listening to port ${PORT}`);
	mongoose.connect(uri);
});
