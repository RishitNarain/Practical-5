// validation.js

function validateData(req, res, next) {
    const { body } = req;

    // Example validation: Require 'name' and 'email' fields
    if (!body.name || !body.email) {
        return res.status(400).json({ message: 'Name and email are required.' });
    }

    // Add more validations as needed
    // If validation passes, call next()
    next();
}

module.exports = validateData;