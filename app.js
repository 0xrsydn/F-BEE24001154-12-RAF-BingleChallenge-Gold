const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const userRoutes = require('./routes/user');
const itemRoutes = require('./routes/item');
const orderRoutes = require('./routes/order');

app.use('/users', userRoutes);
app.use('/items', itemRoutes);
app.use('/orders', orderRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
