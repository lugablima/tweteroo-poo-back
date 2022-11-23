import { Router } from 'express';
import { AuthController } from "../controllers/authController.js";

export class AuthRouter {
    constructor() {
        this.route = Router();
        this.route.post('/sign-up', new AuthController().createUser);
    }
}