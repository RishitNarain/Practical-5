const express = require('express');
const router = express.Router();

// Sample data
let products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 }
];

// GET /products - Retrieve all products
router.get('/', (req, res) => {
    res.status(200).json(products);
});

// GET /products/:id - Retrieve a specific product by ID
router.get('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// POST /products - Create a new product
router.post('/', (req, res) => {
    const newProduct = { id: products.length + 1, ...req.body };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// PUT /products/:id - Update a product by ID
router.put('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex > -1) {
        products[productIndex] = { id: productId, ...req.body };
        res.status(200).json(products[productIndex]);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// DELETE /products/:id - Delete a product by ID
router.delete('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    products = products.filter(p => p.id !== productId);
    res.status(204).send();
});

module.exports = router;