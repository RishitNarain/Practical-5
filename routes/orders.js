const express = require('express');
const router = express.Router();

// Sample data for orders
let orders = [];

// GET /orders - Retrieve all orders
router.get('/', (req, res) => {
    res.json(orders);
});

// POST /orders - Create a new order
router.post('/', (req, res) => {
    const order = req.body;
    orders.push(order);
    res.status(201).json(order);
});

// GET /orders/:id - Retrieve a specific order by ID
router.get('/:id', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) return res.status(404).send('Order not found.');
    res.json(order);
});

// PUT /orders/:id - Update a specific order by ID
router.put('/:id', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) return res.status(404).send('Order not found.');
    Object.assign(order, req.body);
    res.json(order);
});

// DELETE /orders/:id - Delete a specific order by ID
router.delete('/:id', (req, res) => {
    const orderIndex = orders.findIndex(o => o.id === parseInt(req.params.id));
    if (orderIndex === -1) return res.status(404).send('Order not found.');
    orders.splice(orderIndex, 1);
    res.status(204).send();
});

module.exports = router;