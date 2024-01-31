import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import { animeRouter } from './anime/anime.router';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/animes', animeRouter);

app.listen(PORT, () => {
  console.log('server running on PORT:', PORT);
});
