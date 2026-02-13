const express = require('express');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const cartRouter = require('./routes/cart');
const ordersRouter = require('./routes/orders');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Integrate all routes
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/cart', cartRouter);
app.use('/orders', ordersRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
