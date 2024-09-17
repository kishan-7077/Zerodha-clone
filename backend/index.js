const express = require("express");
require("dotenv").config();

const app = express();

let port = process.env.PORT;
app.listen(port, () => {
	console.log(`listening to port ${port}`);
});
