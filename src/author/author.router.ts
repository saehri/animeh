import express from 'express';
import type {Request, Response} from 'express';

import * as authorService from './author.service';

export const authorRouter = express.Router();

/* GET: LIST OF AUTHORS */
authorRouter.get('/', async (req: Request, res: Response) => {
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

/* POST: CREATE A NEW AUTHOR */
authorRouter.post('/', async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    // Only proceed to the next step if the email is not used
    const isUserExist = await authorService.getAuthorByQuery({
      email: payload.email,
    });
    if (!isUserExist.length) {
      const responseData = await authorService.createAuthor(payload);
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

/* GET: GET AUTHOR DETAIL */
authorRouter.get('/:id', async (req: Request, res: Response) => {
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
});

/* PUT: EDIT AUTHOR DATA */
authorRouter.put('/:id', async (req: Request, res: Response) => {
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
});

/* DELETE: DELETE AUTHOR BY ID */
authorRouter.delete('/:id', async (req: Request, res: Response) => {
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
});
