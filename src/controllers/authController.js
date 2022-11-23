import { AuthService } from "../services/authService.js";

export class AuthController {
    constructor() {}

    createUser(req, res) {
        try {
            const { username, avatar } = req.body;

            new AuthService().createUser(username, avatar);
              
            res.status(200).send('OK deu tudo certo');            
        } catch (error) {
            if(error.type === 'bad_request') res.status(400).send(error.message);
            else res.status(500).send(error.message);  
        }
    }
}