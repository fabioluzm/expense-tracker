// Server dependencies
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db')

// Load enviromnent variables
dotenv.config({ path: './config/config.env' })

// Connect to database
connectDB();

// Load router into the server
const transactions = require('./routes/transactions');

// Initialize express app
const app = express();

// Body parser middleware to use on CRUD operations
app.use(express.json());

// Router to be used
app.use('/api/v1/transactions', transactions);

// Server Environment
const ENVIRONMENT = process.env.NODE_ENV; 

// Server PORT
const PORT = process.env.PORT || 5000;

// Run the server
app.listen(PORT, console.log(`Server running in ${ENVIRONMENT} mode on port ${PORT}`.yellow.bold));