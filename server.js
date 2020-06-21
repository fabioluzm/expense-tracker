// Server dependencies
const path = require('path');
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

// Implement Morgan to show API requests on the server console
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Router to be used
app.use('/api/v1/transactions', transactions);

// Check for production builded files
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

// Server Environment
const ENVIRONMENT = process.env.NODE_ENV; 

// Server PORT
const PORT = process.env.PORT || 5000;

// Run the server
app.listen(PORT, console.log(`Server running in ${ENVIRONMENT} mode on port ${PORT}`.yellow.bold));