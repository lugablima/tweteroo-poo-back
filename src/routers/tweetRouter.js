import { Router } from 'express';
import { TweetController } from '../controllers/tweetController.js';

export class TweetRouter {
    constructor() {
        this.route = Router();
        this.route.post('/tweets', new TweetController().createTweet)
        .get('/tweets/:username', new TweetController().getTweetsByUser)
        .get('/tweets', new TweetController().getAllTweets);
    }
}