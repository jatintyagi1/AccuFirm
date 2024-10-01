// server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors({
  origin: 'https://accufirm.vercel.app',
}));
app.use(express.json());

// MongoDB connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// Routes
app.get("/", (req, res) => {
  res.send("AccuFirm API is running!");
  res.send("an Accounting App")
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ->  ${PORT}`);
});
