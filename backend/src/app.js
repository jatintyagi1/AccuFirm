const express = require('express');
const cors = require('cors');
const compression = require('compression');
const cookieParser = require('cookie-parser');
// const fileUpload = require('express-fileupload');

// Importing our Routes
const coreAuthRouter = require('./routes/coreRoutes/coreAuth');
const coreApiRouter = require('./routes/coreRoutes/coreApi');
//const adminAuth = require('./controller/coreController/adminAuth');

const errorHandler = require('./handler/errorHandler');

// Create our express app
const app = express();

app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

// API Routes
app.use('/api', coreAuthRouter);
//app.use('/api', adminAuth.isValidAuthToken, coreApiRouter);

// If the above routes didn't work, we 404 them and forward to the error handler
app.use(errorHandler.notFound);

// Production error handler
app.use(errorHandler.productionErrors);

// Export our app
module.exports = app;
