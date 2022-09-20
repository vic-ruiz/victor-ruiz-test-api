import ProductsFactory from "../persistencia/factory/productsFactory.js";

const api = ProductsFactory.getDao();

async function getProducts(req, res) {
  try {
    const products = await api.getAll();
    products
      ? res.status(200).json(products)
      : res.status(404).json({ message: "No products available" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getProductById(req, res) {
  try {
    const product = await api.getOne(req.params.id);
    product
      ? res.status(200).json(product)
      : res
          .status(404)
          .json({ message: "Product not found. id: " + req.params.id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function createProduct(req, res) {
  try {
    const newProduct = await api.create(req.body);
    res.status(201).json({
      message: "Product created",
      product: newProduct,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function updateProduct(req, res) {
  try {
    const updatedProduct = await api.update(req.params.id, req.body);
    res.json({
      message: "Product updated",
      id: updatedProduct._id,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function deleteById(req, res) {
  try {
    const deletedProduct = await api.delete(req.params.id);
    res.json({
      message: "Product deleted",
      id: deletedProduct._id,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteById,
};
