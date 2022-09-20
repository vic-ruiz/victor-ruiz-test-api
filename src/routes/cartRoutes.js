import { Router } from "express";
import { addProductToCart, createCart, deleteCart, deleteProductInCart, getCartByID, getCarts, productsInCart } from "../controllers/cartController.js";

const cartRouter = Router();

cartRouter.get("/", getCarts);
cartRouter.get("/:id", getCartByID);
cartRouter.post("/", createCart);
cartRouter.delete("/:id", deleteCart);
cartRouter.get("/:id/productos", productsInCart);
cartRouter.post("/:id/productos", addProductToCart);
cartRouter.delete("/:id/productos/:productoId", deleteProductInCart);

export default cartRouter;
