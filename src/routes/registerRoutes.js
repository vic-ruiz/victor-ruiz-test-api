import { Router } from "express";
import { registerView, registerFailure, registerAuth } from "../controllers/registerController.js";

const registerRouter = Router();

registerRouter.get("/", registerView);
registerRouter.post("/",registerAuth);
registerRouter.get("/registerFailure", registerFailure );

export default registerRouter;
