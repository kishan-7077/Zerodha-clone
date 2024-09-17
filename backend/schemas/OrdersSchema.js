const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
	name: String,
	qty: String,
	price: Number,
	mode: String,
});

module.exports = { OrdersSchema };
