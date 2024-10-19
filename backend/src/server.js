require('module-alias/register'); // Enable module aliasing
const mongoose = require("mongoose");
const { globSync } = require('glob'); // Glob for matching file paths
const path = require('path');
require("dotenv").config();  // Load environment variables from .env

// Ensure Node.js version is 20 or higher
const [major] = process.versions.node.split('.').map(parseFloat);
if (major < 20) {
  console.log('Please upgrade your Node.js version to 20 or greater. 👌\n');
  process.exit();
}

const databaseUri = process.env.MONGODB_URI; // Updated variable name
console.log('Database URI:', databaseUri); // For debugging

mongoose.connect(databaseUri)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.log('🔥 Error connecting to MongoDB. Check your .env file and ensure your MongoDB URI is correct.');
    console.error(`🚫 Connection Error: ${err.message}`);
  });

// Log MongoDB connection errors
mongoose.connection.on('error', (error) => {
  console.log('🔥 Common Error: Check your .env file first and add your MongoDB URL.');
  console.error(`🚫 Error: ${error.message}`);
});

// Initialize app
const app = require('./app');

// Routes
app.get("/", (req, res) => {
  res.send("AccuFirm API is running! An Accounting App.");
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Start the server
app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`🚀 Express running → On PORT: ${server.address().port}`);
});
