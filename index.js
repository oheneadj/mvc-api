// Import espress router
const express = require('express');

// Import product router
const productsRouter = require('./routes/products.route');

const app = express();

// Setting PORT
const PORT = 4000;

// Setting the products route
app.use("/products", productsRouter);

app.listen(PORT, () => {
    console.log(`🚀 Server running on PORT:${ PORT }`);
});