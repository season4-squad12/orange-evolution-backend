import { Request, Response, NextFunction } from 'express';
import { authToken } from '../token';

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Not authorized' });
  const result = await authToken(authorization);

  if (!result) res.status(401).json({ message: 'Token invalid' });

  next();
};

export default verifyToken;
