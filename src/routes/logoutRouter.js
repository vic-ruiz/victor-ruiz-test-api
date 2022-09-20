import { Router } from "express";
import { logoutSession } from "../controllers/logoutController.js";

const logoutRouter = Router();

logoutRouter.get("/",logoutSession);


export default logoutRouter;