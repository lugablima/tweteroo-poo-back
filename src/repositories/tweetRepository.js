import { tweets } from "../data/data.js";

export class TweetRepository {
    constructor() {
        this.tweets = tweets;
    }

    addTweet(username, tweet, avatar) {
        this.tweets.push({ username, tweet, avatar });
    }

    getTweetsByUser(username) {
        return this.tweets.filter(t => t.username === username);
    }
}