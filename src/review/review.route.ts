import express from 'express';
import type {Request, Response} from 'express';
import authMiddleware from '../middleware/authMiddleware';

import * as reviewService from './review.service';
import {getPostById} from '../post/post.service';

export const reviewRouter = express.Router();

reviewRouter.get('/', authMiddleware, async (req: Request, res: Response) => {
  try {
    const responseData = await reviewService.listReviews();

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

reviewRouter.get(
  '/:id',
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const reviewId = req.params.id;

      const responseData = await reviewService.getReviewById(Number(reviewId));

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
  }
);

reviewRouter.post('/', authMiddleware, async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    // Check if the user already reviewd this post
    const reviewByUser = await reviewService.getReviewsByUser(
      Number(payload.reviewId),
      Number(payload.postId)
    );

    if (reviewByUser.length) {
      throw new Error('You already reviewd this anime.');
    } else {
      const isPostExist = await getPostById(Number(payload.postId));

      if (isPostExist) {
        const responseData = await reviewService.createReview(payload);
        return res.status(201).json({
          success: true,
          message: 'Review is successfully created!',
          data: responseData,
        });
      } else {
        throw new Error('The anime you are trying to review does not exist.');
      }
    }
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
});

reviewRouter.put(
  '/:id',
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const reviewId = req.params.id;
      const payload = req.body;

      const responseData = await reviewService.updateReview(
        Number(reviewId),
        payload
      );

      return res.status(200).json({
        success: true,
        data: responseData,
        message: 'Review successfully edited',
        serverRespondeAt: new Date().toISOString(),
      });
    } catch (error: any) {
      return res.status(500).json({
        message: error.message,
        success: false,
      });
    }
  }
);

reviewRouter.delete(
  '/:id',
  authMiddleware,
  async (req: Request, res: Response) => {
    const reviewId = req.params.id;

    try {
      await reviewService.deleteReview(Number(reviewId));
      return res
        .status(200)
        .json({message: 'Review is successfully deleted.', success: true});
    } catch (error: any) {
      return res.status(500).json({
        message: error.message,
        success: false,
      });
    }
  }
);
