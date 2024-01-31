import express from 'express';
import type {Request, Response} from 'express';
import {body, validationResult} from 'express-validator';

import * as AnimeService from './anime.service';

export const animeRouter = express.Router();

animeRouter.get('/', async (req: Request, res: Response) => {
  try {
    const animes = await AnimeService.listAnimes();
    return res.status(200).json(animes);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});
