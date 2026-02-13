'use strict';

const createError = require('http-errors');

// Error handling middleware
const errorHandler = (err, req, res, next) => {
    // Set default status code
    const status = err.status || 500;
    
    // Respond with error message
    res.status(status).json({
        status,
        message: err.message,
    });
};

module.exports = errorHandler;
