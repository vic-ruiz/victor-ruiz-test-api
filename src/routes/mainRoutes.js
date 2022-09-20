import { Router } from "express";
import { mainViwer } from "../controllers/mainController.js";
import isAuth from "../utils/isAuth.js";

const mainRouter = Router();

mainRouter.get("/",isAuth, mainViwer )

export default mainRouter