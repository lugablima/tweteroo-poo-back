import { TweetRepository } from "../repositories/tweetRepository.js";
import { UserRepository } from "../repositories/userRepository.js";

export class TweetService {
    constructor() {
        this.userRepository = new UserRepository();
        this.tweetRepository = new TweetRepository(); 
    }

    createTweet(username, tweet) {
        if (!username || !tweet) {
            throw { type: 'bad_request', message: 'Todos os campos são obrigatórios!' };
        }
        
        const { avatar } = this.userRepository.getUser(username);
        
        this.tweetRepository.addTweet(username, tweet, avatar);
    }

    getTweetsByUser(username) {
        const tweetsDoUsuario = this.tweetRepository.getTweetsByUser(username);

        return tweetsDoUsuario;
    }

    getAllTweets(page) {
        if (page && page < 1) {
            throw { type: 'bad_request', message: 'Informe uma página válida!' };
        }

        const limite = 10;
        const start = (page - 1) * limite;
        const end = page * limite;
        
        if (this.tweetRepository.tweets.length <= 10) {
            return this.reverseTweets();
        }

        return this.reverseTweets().slice(start, end);
    }

    reverseTweets() {
        return [...this.tweetRepository.tweets].reverse();
    }
}