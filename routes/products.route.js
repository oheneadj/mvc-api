// Import product controller
const { createProduct, deleteProduct, getProduct, getProducts, updateProduct } = require("../controller/products.controller");

// Import express router
const { Router } = require("express");

const productsRouter = Router();

// Create a single product
productsRouter.post("/", createProduct);

// Get all products
productsRouter.get("/", getProducts);

// Get a single product by {Id}
productsRouter.get("/:productId", getProduct);

// Update a single product by {Id}
productsRouter.patch("/:productId", updateProduct);

// Delete a single product by {Id}
productsRouter.delete("/:productId", deleteProduct);

module.exports = productsRouter;