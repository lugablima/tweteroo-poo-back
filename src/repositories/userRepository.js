import { users } from "../data/data.js";

export class UserRepository {
    constructor() {
        this.users = users;
    }

    addUser(username, avatar) {
        this.users.push({ username, avatar });
    }

    getUser(username) {
        return this.users.find(user => user.username === username);
    }
}