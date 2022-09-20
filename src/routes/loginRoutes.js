import { Router } from "express";
import { loginAuth, loginView, loginViewFailure } from "../controllers/loginController.js";

const loginRouter = Router();

loginRouter.get("/", loginView);
loginRouter.post("/",loginAuth) 
loginRouter.get("/loginFailure",loginViewFailure);

export default loginRouter;