import express from 'express';
import type {Request, Response} from 'express';
import {body, validationResult} from 'express-validator';

import * as postsService from './post.service';

export const postsRouter = express.Router();

postsRouter.get('/', async (req: Request, res: Response) => {
  try {
    const querys = req.query;
    let responseData;

    if (Object.keys(querys).length) {
      const posts = await postsService.getPostsByQuery(querys);
      responseData = posts;
    } else {
      const posts = await postsService.listPosts();
      responseData = posts;
    }

    res.status(200).json({
      success: true,
      responseDataLength: responseData.length,
      data: responseData,
      serverRespondeAt: new Date().toISOString(),
      isEmpty: responseData.length === 0,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: 'Failed to fetch data from server. Please try again later',
      success: false,
    });
  }
});

postsRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;

    const responseData = await postsService.getPostById(Number(postId));

    return res.status(200).json({
      success: true,
      data: responseData,
      serverRespondeAt: new Date().toISOString(),
    });
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});
