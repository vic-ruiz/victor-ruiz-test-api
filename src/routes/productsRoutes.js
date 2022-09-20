import { Router } from "express";
import { createProduct, deleteById, getProductById, getProducts, updateProduct } from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/", getProducts);
productsRouter.get("/:id", getProductById);
productsRouter.post("/", createProduct);
productsRouter.put("/:id", updateProduct);
productsRouter.delete("/:id", deleteById );

export default productsRouter;
