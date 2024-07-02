const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Import routes
const userRoutes = require('./routes/user');
const itemRoutes = require('./routes/item');
const orderRoutes = require('./routes/order');

// Use routes
app.use('/users', userRoutes);
app.use('/items', itemRoutes);
app.use('/orders', orderRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
