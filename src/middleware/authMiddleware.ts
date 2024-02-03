import type {Request, Response, NextFunction} from 'express';

const jwt = require('jsonwebtoken');

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers.authorization;
    const jwtToken = authHeader && authHeader?.split(' ')[1];

    if (jwtToken) {
      next();
    } else {
      throw new Error('Access unaothorized!');
    }
  } catch (error: any) {
    return res.status(401).json({message: error.message, success: false});
  }
}
