import { productsDao as api } from "../persistencia/daos/index.js";

async function mainViwer (req, res) {
    try {
        const products = await api.getAll();
        products
          ? res.status(200).render("main", {products})
          : res.status(404).json({ message: "No products available" });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    
};

export {mainViwer}