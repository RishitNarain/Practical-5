const express = require('express');
const router = express.Router();

// GET /cart - Retrieve all items in the cart
router.get('/', (req, res) => {
    // Logic to retrieve cart items
    res.send('List of items in the cart');
});

// POST /cart - Add an item to the cart
router.post('/', (req, res) => {
    const newItem = req.body;
    // Logic to add item to the cart
    res.status(201).send(`Item added to cart: ${JSON.stringify(newItem)}`);
});

// DELETE /cart/:id - Remove an item from the cart
router.delete('/:id', (req, res) => {
    const itemId = req.params.id;
    // Logic to remove item from the cart
    res.send(`Item with ID ${itemId} removed from cart`);
});

module.exports = router;