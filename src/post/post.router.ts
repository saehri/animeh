import express from 'express';
import type {Request, Response} from 'express';
import authMiddleware from '../middleware/authMiddleware';

import * as postsService from './post.service';
import {getAuthorById, getAuthorPost} from '../author/author.service';

export const postsRouter = express.Router();

postsRouter.get('/', authMiddleware, async (req: Request, res: Response) => {
  try {
    const responseData = await postsService.listPosts();

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

postsRouter.get(
  '/search',
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const querys = req.query;
      const responseData = await postsService.getPostsByQuery(querys);

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
  }
);

postsRouter.get(
  '/max/:maxResponse',
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const maxPost = req.params.maxResponse;
      const responseData = await postsService.getPostsByQuery(
        {},
        Number(maxPost)
      );

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
  }
);

postsRouter.get('/:id', authMiddleware, async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;

    const responseData = await postsService.getPostById(Number(postId));

    return res.status(200).json({
      success: true,
      data: responseData,
      serverRespondeAt: new Date().toISOString(),
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
});

postsRouter.post('/', authMiddleware, async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    if (Object.keys(payload).length < 2) {
      throw new Error('Post title, synopsis, or authorId cannot be empty.');
    } else {
      const isAuthorExist = await getAuthorById(Number(payload.authorId));

      if (isAuthorExist) {
        if (isAuthorExist.isAdmin) {
          const responseData = await postsService.createPost(payload);

          return res.status(201).json({
            success: true,
            message: 'Post is successfully created!',
            data: responseData,
          });
        } else {
          throw new Error(
            'Unauthorized access. You need to be an admin to do this operation.'
          );
        }
      } else {
        throw new Error(
          'Author with the id provided does not exist in our record. Make sure you provided the correct id.'
        );
      }
    }
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
});

postsRouter.put(
  '/:authorId/:animesId',
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const authorId = req.params.authorId;
      const postId = req.params.animesId;
      const payload = req.body;

      const isAuthorExist = await getAuthorById(Number(authorId));

      if (!isAuthorExist || !isAuthorExist.isAdmin) {
        throw new Error('Unauthorized, admin only.');
      } else {
        const isPostExist = await getAuthorPost(
          Number(authorId),
          Number(postId)
        );

        if (!isPostExist?.posts.length) {
          throw new Error('There are no record of post with the specified id.');
        } else {
          if (!Object.keys(payload).length) {
            throw new Error('Request body is cannot be empty.');
          }

          const responseData = await postsService.updatePost(
            Number(postId),
            payload
          );

          return res.status(200).json({
            success: true,
            data: responseData,
            message: 'Post successfully edited',
            serverRespondeAt: new Date().toISOString(),
          });
        }
      }
    } catch (error: any) {
      return res.status(500).json({
        message: error.message,
        success: false,
      });
    }
  }
);

postsRouter.delete(
  '/:id',
  authMiddleware,
  async (req: Request, res: Response) => {
    const postId = req.params.id;

    try {
      await postsService.deletePost(Number(postId));
      return res
        .status(200)
        .json({message: 'Post is successfully deleted.', success: true});
    } catch (error: any) {
      return res.status(500).json({
        message: error.message,
        success: false,
      });
    }
  }
);
