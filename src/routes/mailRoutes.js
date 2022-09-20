import {Router} from 'express'
import { sendMail } from '../controllers/mailController.js';

const mailRouter = Router();

mailRouter.get('/register',sendMail);

export default mailRouter; 