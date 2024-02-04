import express from 'express';
import type {Request, Response} from 'express';
import authMiddleware from '../middleware/authMiddleware';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

import * as authorService from './author.service';
import {postsRouter} from '../post/post.router';

export const authorRouter = express.Router();

/* GET: LIST OF AUTHORS */
authorRouter.get('/', authMiddleware, async (req: Request, res: Response) => {
  try {
    const responseData = await authorService.listAuthor();

    res.status(200).json({
      success: true,
      responseDataLength: responseData.length,
      data: responseData,
      serverRespondeAt: new Date().toISOString(),
      isEmpty: responseData.length === 0,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to fetch author from server. Please try again later',
      success: false,
    });
  }
});

/* GET: GET AUTHOR DETAIL */
authorRouter.get(
  '/:id',
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const authorId = req.params.id;

      const responseData = await authorService.getAuthorById(Number(authorId));

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

/* PUT: EDIT AUTHOR DATA */
authorRouter.put(
  '/:id',
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const authorId = req.params.id;
      const payload = req.body;

      const responseData = await authorService.updateAuthor(
        Number(authorId),
        payload
      );

      return res.status(200).json({
        success: true,
        data: responseData,
        message: 'Author successfully edited',
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

/* DELETE: DELETE AUTHOR BY ID */
authorRouter.delete(
  '/:id',
  authMiddleware,
  async (req: Request, res: Response) => {
    const authorId = req.params.id;

    try {
      await authorService.deleteAuthor(Number(authorId));
      return res
        .status(200)
        .json({message: 'Author is successfully deleted.', success: true});
    } catch (error: any) {
      return res.status(500).json({
        message: error.message,
        success: false,
      });
    }
  }
);

/* POST: CREATE A NEW AUTHOR */
authorRouter.post('/signup', async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    // Only proceed to the next step if the email is not used
    const isAuthorExisit = await authorService.getAuthorByQuery({
      email: payload.email,
    });

    if (!isAuthorExisit.length) {
      // Hash the password before storing
      const saltRounds = 8;
      const hashedPassword = await bcrypt.hash(payload.password, saltRounds);

      const responseData = await authorService.createAuthor({
        ...payload,
        password: '',
        hashedPassword,
      });

      return res.status(201).json({
        success: true,
        message: 'Author is created!',
        data: responseData,
      });
    } else {
      throw new Error('Email is already used. Please use another one.');
    }
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
});

/* POST: LOGIN */
authorRouter.post('/signin', async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const {email, password} = payload;

    // Data validation
    if (!email || !password) {
      return res.status(400).json('Email or password cannot be empty!');
    }

    const isAuthorExisit = await authorService.getAuthorByQuery({
      email: payload.email,
    });
    if (isAuthorExisit.length) {
      const foundUser = isAuthorExisit[0];

      const isPasswordMatch = await bcrypt.compare(
        payload.password,
        foundUser.hashedPassword
      );
      if (isPasswordMatch) {
        // Createa token tha will go invalid after 7 days
        const token = jwt.sign({id: foundUser.id}, process.env.SECRET_STRING, {
          expiresIn: '7d',
        });

        return res.json({
          message: 'Sigin in success!',
          success: true,
          data: foundUser,
          token,
        });
      } else {
        throw new Error('Password does not match.');
      }
    } else {
      throw new Error(
        'There is not registered author with this emai. Please sign up if your are new.'
      );
    }
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
});
