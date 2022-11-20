const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const usersRouter = require('./routes/api/users')
const transactionsRouter = require('./routes/api/transactions')

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Wallet API",
			version: "1.0.0",
			description: "An Express Wallet API",
		},
	},
	apis: ["./routes/api/*.js"],
};

const specs = swaggerJsDoc(options);

const app = express()

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/users', usersRouter)
app.use('/api/transactions', transactionsRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const {status = 500, message = "Server error"} = err;
  res.status(status).json({ message})
})

module.exports = app
