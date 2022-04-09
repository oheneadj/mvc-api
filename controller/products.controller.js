// CRUD for Products

// Create
const createProduct = (req, res) => {
    res.send("Product created successfully");
};

// Read
const getProducts = (req, res) => {
    res.send("Getting all products successfully");
}

const getProduct = (req, res) => {
    res.send("Product retrieved successfully");
}

// Update
const updateProduct = (req, res) => {
    res.send("Product updated successfully");
}

// Delete
const deleteProduct = (req, res) => {
    res.send("Product deleted successfully");
}

module.exports = {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct  
}