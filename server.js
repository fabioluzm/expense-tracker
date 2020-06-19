// Dependencies
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

// Load enviromnent variables
dotenv.config({ path: './config/config.env' })

// Load router into the server
const transactions = require('./routes/transactions');

// Initialize express app
const app = express();

// Router to be used
app.use('/api/v1/transactions', transactions);

// Server Environment
const ENVIRONMENT = process.env.NODE_ENV; 

// Server PORT
const PORT = process.env.PORT || 5000;

// Run the server
app.listen(PORT, console.log(`Server running in ${ENVIRONMENT} mode on port ${PORT}`.yellow.bold));