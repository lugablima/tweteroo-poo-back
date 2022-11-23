import chalk from 'chalk';
import cors from 'cors';
import express, { json } from 'express';
import { AuthRouter } from './routers/authRouter.js';
import { TweetRouter } from './routers/tweetRouter.js';

const app = express();

app.use(cors(), json());

app.use(new AuthRouter().route);
app.use(new TweetRouter().route);

app.listen(5001, () => {
  console.log(chalk.bold.blue('Servidor funfando de boas!!!'));
});
