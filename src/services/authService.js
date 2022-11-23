import { UserRepository } from '../repositories/userRepository.js';

export class AuthService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    createUser(username, avatar) {
        if (!username || !avatar) {
            throw { type: 'bad_request', message: 'Todos os campos são obrigatórios!' };
        }

        this.userRepository.addUser(username, avatar);
    }
}