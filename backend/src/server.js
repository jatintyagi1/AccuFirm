const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();  // Load environment variables from .env

// Ensure Node.js version is 20 or higher
const [major] = process.versions.node.split('.').map(parseFloat);
if (major < 20) {
  console.log('Please upgrade your Node.js version to 20 or greater. 👌\n');
  process.exit();
}

const app = express();

// Middleware
app.use(cors({
  origin: 'https://accufirm.vercel.app', // Allow only specific origin
}));
app.use(express.json()); // Parse JSON bodies

// Load additional environment variables
require('dotenv').config({ path: '.env.local' });

const databaseUri = process.env.DATABASE || 'your_default_database_uri_here';
mongoose.connect(databaseUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
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

// Routes
app.get("/", (req, res) => {
  res.send("AccuFirm API is running! An Accounting App.");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port -> ${PORT}`);
});

// Export the app for potential testing or further integration
module.exports = app;
