import { TweetService } from "../services/tweetService.js";

export class TweetController {
    constructor() {}

    createTweet(req, res) {
      try {
        const { tweet, username } = req.body;

        new TweetService().createTweet(username, tweet);
      
        res.status(201).send('OK, seu tweet foi criado'); 
      } catch (error) {
        if(error.type === 'bad_request') res.status(400).send(error.message);
        else res.status(500).send(error.message);  
      }
    }

    getTweetsByUser(req, res) {
        const { username } = req.params;
      
        const tweetsDoUsuario = new TweetService().getTweetsByUser(username);
      
        res.status(200).send(tweetsDoUsuario);
    }

    getAllTweets(req, res) {
      try {
        const { page } = req.query;

        const tweets = new TweetService().getAllTweets(page);
            
        res.status(200).send(tweets);    
      } catch (error) {
        if(error.type === 'bad_request') res.status(400).send(error.message);
        else res.status(500).send(error.message);     
      }    
    }
}